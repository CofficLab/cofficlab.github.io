<template>
    <div class="flex flex-col gap-4 container mx-auto items-center my-10">
        <h2>{{ lang === 'en' ? 'Our Team' : '我们的团队' }}</h2>
        <div data-type="members" class="flex flex-row gap-4 justify-center">
            <Member v-for="member in members" :key="member.name" :member="getLocalizedMember(member)" />
        </div>
    </div>
</template>

<script setup>
import Member from '../Common/Member.vue';

const props = defineProps({
    lang: {
        type: String,
        default: 'en',
        validator: (value) => ['en', 'zh'].includes(value)
    }
});

const members = [
    {
        avatar: '/images/coffic/logo3.min.png',
        name: 'Coffic Lab',
        description: { en: 'Our organization', zh: '我们的组织' },
        github: 'https://github.com/cofficlab'
    },
    {
        avatar: '/images/team/nookery.png',
        name: 'Nookery',
        description: { en: 'Work for joy', zh: '工作寻趣，生活有趣' },
        github: 'https://github.com/nookery'
    },
    {
        avatar: '/images/team/sunrunning.png',
        name: 'Sunrunning',
        description: { en: 'Almost a genius', zh: '几乎是个天才' },
        github: 'https://github.com/sunrunning'
    },
    {
        avatar: '/images/team/edith.min.png',
        name: 'Edith',
        description: { en: "Having what kind of heart, you can see what kind of world. I'm the neighbor of geniuses", zh: "拥有什么样的内心，就能看到什么样的世界。悄悄告诉你，我可是天才们的邻居" },
    },
]

const getLocalizedMember = (member) => {
    return {
        ...member,
        name: typeof member.name === 'object' ? member.name[props.lang] : member.name,
        description: typeof member.description === 'object' ? member.description[props.lang] : member.description,
    };
};
</script>
