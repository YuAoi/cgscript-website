/**
 * 序列化导航信息用到的一些函数
 */
const deepEach = function (arr, callback, childrenKey = 'children') {
  if (!Array.isArray(arr)) return
  if (typeof callback !== 'function') return

  let i = 0
  let node = arr[i]

  while (node) {
    const result = callback(node)
    if (result && result.done) return
    if (node[childrenKey]) deepEach(node[childrenKey], callback, childrenKey)
    node = arr[++i]
  }
}

const deepCopyNodeProps = function (target, source, props) {
  for (let node of source) {
    let cnode = {}
    target.push(cnode)
    props.forEach(prop => {
      if (!Array.isArray(node[prop])) {
        if (typeof node[prop] !== 'undefined') cnode[prop] = node[prop]
      } else {
        cnode[prop] = []
        deepCopyNodeProps(cnode[prop], node[prop], props)
      }
    })
  }
  return target
}

const deepFilter = function (node, verFun) {
  let target = {}

  // 如果没有通过验证，直接返回null（verFun应该接收node值，验证后返回一个Boolean值）
  if (!verFun(node)) return null

  if (node.children) {
    for (let childNode of node.children) {
      let temp = deepFilter(childNode, verFun)
      if (temp) {
        target.children = target.children || []
        target.children.push(temp)
      }
    }
  }

  Object.keys(node).forEach(key => {
    if (key !== 'children') target[key] = node[key]
  })

  // 如果有children，则判断children中有没有有权限的
  if (node.children) {
    if (target.children) {
      return target
    } else {
      return null
    }
  } else {
    return target
  }
}

export {
  deepEach,
  deepCopyNodeProps,
  deepFilter
}
