import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const BreadCrumbShoeStore = (props) => {

    const { page } = props;

    return(
        <div>
            <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>{page}</BreadcrumbItem>
            </Breadcrumb>
        </div>
    );
};

export default BreadCrumbShoeStore;
