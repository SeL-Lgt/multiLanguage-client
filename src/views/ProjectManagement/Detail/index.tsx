import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'antd';
import classnames, {
  alignItems,
  display,
  fontSize,
  fontWeight,
  justifyItems,
  space,
} from '~/tailwindcss-classnames';
import { AntdTable, TablePropsType } from '@/component/Common/CTable/ATable';
import SonForm from '@/views/ProjectManagement/component/SonForm';

function ProjectManagementDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState<TablePropsType>({
    config: {},
    data: {
      columns: [
        {
          title: '子模块Key',
          dataIndex: 'submoduleKey',
          key: 'submoduleKey',
          align: 'center',
        },
        {
          title: '操作',
          dataIndex: 'operating',
          key: 'operating',
          align: 'center',
          render: (text: string, item: object) => (
            <Button type='link' onClick={() => deleteModule({ item })}>
              删除
            </Button>
          ),
        },
      ],
      dataSource: [],
    },
  });
  // 控制表单显示
  const [showModal, setShowModal] = useState<boolean>(false);

  /**
   * 返回上一页
   */
  const back = () => {
    navigate('/projectManagement');
  };

  /**
   * 删除模块
   * @param item
   */
  const deleteModule = (item: object) => {
    console.log(item);
  };

  /**
   * 打开子模块对话框
   */
  const openModal = () => {
    setShowModal(true);
  };

  /**
   * 关闭对话框
   */
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={classnames(space('space-y-5'))}>
      <div
        className={classnames(
          display('flex'),
          alignItems('items-center'),
          space('space-x-2'),
        )}
      >
        <Button type='primary' onClick={back}>
          返回
        </Button>
        <div className={classnames(fontSize('text-base'))}>
          当前所选模块：
          <span className={classnames(fontWeight('font-bold'))}>
            {params.id}
          </span>
        </div>
      </div>
      <Button type='primary' onClick={openModal}>
        新增子模块
      </Button>
      <AntdTable data={tableData.data} config={tableData.config} />
      <SonForm
        key={showModal.toString()}
        visible={showModal}
        closeEvent={closeModal}
      />
    </div>
  );
}

export default ProjectManagementDetail;
