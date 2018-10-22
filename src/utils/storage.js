export default {
  /**
   * 存储sessionStorage
   */
  setStore (name, content) {
    if (!name) return
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.sessionStorage.setItem(name, content)
  },

  /**
   * 获取sessionStorage
   */
  getStore (name) {
    if (!name) return
    return window.sessionStorage.getItem(name)
  },

  /**
   * 删除sessionStorage
   */
  removeStore (name) {
    if (!name) return
    window.sessionStorage.removeItem(name)
  }
}