import React from 'react';
import {Link} from 'react-router-dom';
import {Card} from "@material-ui/core";

export const Documentation = () => {
    return (
       <Card>
           This is documentation
           <Link to={'/main'}>Go to mainPage</Link>
       </Card>
    );
};