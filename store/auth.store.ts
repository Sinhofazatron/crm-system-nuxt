interface IAuthStore {
  email: string,
  name: string,
  status: boolean
}

const defaulValue: { user: IAuthStore } = {
  user: {
    email: "",
    name: "",
    status: false
  }
}

export const useAuthStore = defineStore("auth", {
  state: () => defaulValue,
  getters: {
    isAuth: state => state.user.status
  },
  actions: {
    clear () {
      this.$patch(defaulValue)
    },
    set (input: IAuthStore) {
      this.$patch({user: input})
    }
  }
})

export const useIsLoadingStore = defineStore('isLoading', {
  state: () => ({
    isLoading: true
  }),
  actions: {
    set (data: boolean) {
      this.$patch({ isLoading: data })
    }
  }
})