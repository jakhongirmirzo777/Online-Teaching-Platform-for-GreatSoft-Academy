<template>
  <div class="userprofile-container container-fluid">
    <div class="row showcase">
      <div class="col-md-4 left-bar">
        <div class="flex items-center justify-center flex-col">
          <b-avatar size="6em" class="avatar-default my-3"></b-avatar>
          <h1 class="text-h1">
            {{ $auth.user.user.first_name }} {{ $auth.user.user.last_name }}
          </h1>
        </div>
        <b-list-group class="list-group mt-4">
          <b-list-group-item
            class="list-group-item"
            variant="transparent"
            v-for="{ id, title, name } in infos"
            :key="id"
            :to="`/userprofile/${name}`"
            :class="{ 'is-active': id === activeItem }"
            @click="selectItem(id)"
            >{{ title }}
          </b-list-group-item>
        </b-list-group>
      </div>
      <div class="col-md-8 px-0 right-bar">
        <div class="w-full">
          <NuxtChild :itemDetails="itemDetails" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      activeItem: null,
      itemDetails: null,
      infos: [
        {
          title: 'Profile',
          id: 1,
          name: '',
          headerTitle: 'Public profile',
          description: 'Add information about yourself',
        },
        {
          title: 'Photo',
          id: 4,
          name: 'photo',
          headerTitle: 'Photo',
          description: 'Add a nice photo of yourself for your profile',
        },
        {
          title: 'Payment methods',
          id: 3,
          name: 'payment',
          headerTitle: 'Payment methods',
          description: 'Update your credit card information',
        },
        {
          title: 'Account ',
          id: 2,
          name: 'account',
          headerTitle: 'Account',
          description:
            'Edit your account settings and change your password here.',
        },
      ],
    }
  },
  methods: {
    selectItem(itemId) {
      this.activeItem = itemId
      this.itemDetails = this.infos.find((item) => item.id === itemId)
      console.log('item details', this.itemDetails)
    },
  },
  created() {
    if (this.infos.length) {
      this.selectItem(this.infos[0].id)
    }
  },
}
</script>
