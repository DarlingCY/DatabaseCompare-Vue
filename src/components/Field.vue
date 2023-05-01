<template>
    <div class="field">
        <el-collapse accordion>
            <el-collapse-item v-for="(item,index) in fieldDifference" :key="index">
                <template slot="title">
                    <div style="font-size: 1rem; font-weight: bold">
                        <i class="el-icon-coin"></i>
                        <span>{{ item['databaseName'] }}</span>
                    </div>
                </template>
                <div style="padding-left: 25px">
                    <el-collapse accordion>
                        <el-collapse-item v-for="(itemChild,indexChild) in item['table']" :key="indexChild">
                            <template slot="title">
                                <div style="font-size: 1rem; font-weight: bold">
                                    <i class="el-icon-document-copy"></i>
                                    <span>{{ itemChild['tableName'] }}</span>
                                </div>
                            </template>
                            <!--                            <div class="difference">-->
                            <el-descriptions direction="vertical" :column="1" border>
                                <el-descriptions-item label="新增字段" v-if="itemChild['addedField'].length>0" :labelStyle="{fontWeight:'bold'}">
                                    <Tag v-for="(itemChildChild,indexChildChild) in itemChild['addedField']" :key="indexChildChild" :type="'success'" :text="itemChildChild['fieldName']"/>
                                </el-descriptions-item>
                                <el-descriptions-item label="删除字段" v-if="itemChild['deletedField'].length>0" :labelStyle="{fontWeight:'bold'}">
                                    <Tag v-for="(itemChildChild,indexChildChild) in itemChild['deletedField']" :key="indexChildChild" :type="'danger'" :text="itemChildChild['fieldName']"/>
                                </el-descriptions-item>
                                <el-descriptions-item label="更新字段" v-if="itemChild['updateField'].length>0" :labelStyle="{fontWeight:'bold'}">
                                    <el-tabs tab-position="left">
                                        <el-tab-pane v-for="(itemChildChild,indexChildChild) in itemChild['updateField']" :key="indexChildChild" :label="itemChildChild['oldField']['fieldName']">
                                            <div>
                                                <div class="fieldProperty" v-if="itemChildChild['oldField']['fieldDigits']||itemChildChild['newField']['fieldDigits']">
                                                    <span>小数位数：</span>
                                                    <Tag :type="'warning'" :text="itemChildChild['oldField']['fieldDigits']"></Tag>
                                                    <span>&nbsp;==>&nbsp;</span>
                                                    <Tag :type="'warning'" :text="itemChildChild['newField']['fieldDigits']"></Tag>
                                                </div>
                                                <div class="fieldProperty" v-if="itemChildChild['oldField']['fieldIsNull']||itemChildChild['newField']['fieldIsNull']">
                                                    <span>是否为空：</span>
                                                    <Tag :type="'warning'" :text="itemChildChild['oldField']['fieldIsNull']"></Tag>
                                                    <span>&nbsp;==>&nbsp;</span>
                                                    <Tag :type="'warning'" :text="itemChildChild['newField']['fieldIsNull']"></Tag>
                                                </div>
                                                <div class="fieldProperty" v-if="itemChildChild['oldField']['fieldRemarks']||itemChildChild['newField']['fieldRemarks']">
                                                    <span>字段备注：</span>
                                                    <Tag :type="'warning'" :text="itemChildChild['oldField']['fieldRemarks']"></Tag>
                                                    <span>&nbsp;==>&nbsp;</span>
                                                    <Tag :type="'warning'" :text="itemChildChild['newField']['fieldRemarks']"></Tag>
                                                </div>
                                                <div class="fieldProperty" v-if="itemChildChild['oldField']['fieldSize']||itemChildChild['newField']['fieldSize']">
                                                    <span>字段长度：</span>
                                                    <Tag :type="'warning'" :text="itemChildChild['oldField']['fieldSize']"></Tag>
                                                    <span>&nbsp;==>&nbsp;</span>
                                                    <Tag :type="'warning'" :text="itemChildChild['newField']['fieldSize']"></Tag>
                                                </div>
                                                <div class="fieldProperty" v-if="itemChildChild['oldField']['fieldType']||itemChildChild['newField']['fieldType']">
                                                    <span>字段类型：</span>
                                                    <Tag :type="'warning'" :text="itemChildChild['oldField']['fieldType']"></Tag>
                                                    <span>&nbsp;==>&nbsp;</span>
                                                    <Tag :type="'warning'" :text="itemChildChild['newField']['fieldType']"></Tag>
                                                </div>
                                            </div>
                                        </el-tab-pane>
                                    </el-tabs>
                                </el-descriptions-item>
                            </el-descriptions>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
import Tag from "./Tag.vue";

export default {
    name: "Field",
    components: {Tag},
    data() {
        return {
            fieldDifference: []
        }
    },
    created() {
        this.getFieldDifference()
    },
    methods: {
        getFieldDifference() {
            this.$axios.get("/compare/getFieldDifference").then(res => {
                this.fieldDifference = res.data.data
            })
        }
    }
}
</script>

<style scoped>
.fieldProperty {
    display: flex;
    align-items: center;
}

.fieldProperty > span {
    font-weight: bold;
}
</style>
