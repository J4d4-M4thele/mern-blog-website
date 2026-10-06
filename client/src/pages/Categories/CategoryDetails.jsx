import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";
import { RouteAddCategory } from "@/helpers/RouteName";

const CategoryDetails = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <CardHeader>
            <div>
              <Button asChild>
                <Link to={RouteAddCategory}>
                Add Category
                </Link>
              </Button>
            </div>
          </CardHeader>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryDetails;
