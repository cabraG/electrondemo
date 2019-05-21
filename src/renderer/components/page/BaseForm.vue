<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>钢卷信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">


                    <el-form ref="form" :model="form" label-width="100px">
                        <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>基本信息</span>
                        </div>
                        <el-row :gutter="10" v-for="rowdata in myformdata">
                            <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2"></el-col>
                            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" v-for="fdata in rowdata" :key="fdata">
                                <el-form-item :label="fdata.name">
                                    <el-input v-model="fdata.value"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2"></el-col>
                        </el-row>
                    </el-card>
                        <el-card class="box-card">
                            <el-col :span=12>
                            <el-row v-for="rowdata in myformdata">
                                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" v-for="o in 4" :key="o">
                                <label>demo</label><el-input>1</el-input>
                                </el-col>
                            </el-row>
                            </el-col>
                            <el-col :span=12>
                                <el-col :span=12>
                                <el-card class="box-card">
                                </el-card>
                                </el-col>
                                <el-col :span=12>
                                    <el-card class="box-card">

                                    </el-card>
                                </el-col>
                            </el-col>
                        </el-card>

                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">表单提交</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>

                    </el-form>
        </div>

    </div>
</template>

<script>
    import {HistoryValueSelect} from "../../api/myapi"
    import moment from 'moment'

    export default {
        name: 'baseform',
        data: function(){
            return {
                options:[
                    {
                        value: 'guangdong',
                        label: '广东省',
                        children: [
                            {
                                value: 'guangzhou',
                                label: '广州市',
                                children: [
                                    {
                                        value: 'tianhe',
                                        label: '天河区'
                                    },
                                    {
                                        value: 'haizhu',
                                        label: '海珠区'
                                    }
                                ]
                            },
                            {
                                value: 'dongguan',
                                label: '东莞市',
                                children: [
                                    {
                                        value: 'changan',
                                        label: '长安镇'
                                    },
                                    {
                                        value: 'humen',
                                        label: '虎门镇'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: 'hunan',
                        label: '湖南省',
                        children: [
                            {
                                value: 'changsha',
                                label: '长沙市',
                                children: [
                                    {
                                        value: 'yuelu',
                                        label: '岳麓区'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                form: {
                    name: '',
                    region: '',
                    date1: null,
                    date2: null,
                    delivery: true,
                    type: ['步步高'],
                    resource: '小天才',
                    desc: '',
                    options: []
                },
                myformdata:[
                    [{
                        name:'计划号',
                        value:'3710710'
                    },
                    {
                        name:'来料钢卷号',
                        value:'9307214702'
                    },
                    {
                        name:'产出钢卷号',
                        value:'930721470201'
                    },
                    {
                        name:'班别',
                        value:'乙'
                    },
                    {
                        name:'班次',
                        value:'早'
                    }],

                    [
                        {
                        name:'钢种号牌',
                        value:'DC03'
                    },
                        {
                            name:'产品大类',
                            value:'L'
                        },
                        {
                            name:'原料厚度',
                            value:0.900
                        },
                        {
                            name:'原料宽度',
                            value:955.00
                        },
                        {
                            name:'原料重量',
                            value:8870
                        },

                    ]
                ]
            }
        },
        methods: {
            onSubmit() {
                var _this=this
                var data={
                    startDate:moment(_this.form.date1).utc(),
                    endDate:moment(_this.form.date2).utc(false)
                }
                console.log(data.startDate)
                console.log(data.endDate)
                HistoryValueSelect(data).then(function (res) {
                    console.log(res)
                })
                this.$message.success('提交成功！');
            }
        }
    }
</script>
<style>

    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

</style>