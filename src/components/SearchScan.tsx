import { Card, Grid, Image, Input } from "@mantine/core";
import searchIcon from '../assets/logos/search-icon.svg';
import React from 'react';
import scanIcon from '../assets/logos/scan.svg';

interface SearchProps {
  searchInput: any;
}

const SearchScan = ({ searchInput }: SearchProps) => {
  return (
    <>
      <Grid>
        <Grid.Col span={9}>
          <Input
            placeholder="Search..."
            radius={20}
            onChange={(e) => {
              searchInput(e.target.value);
            }}
            rightSection={
              <div>
                <Image
                  width="auto"
                  display="block"
                  height="auto"
                  src={searchIcon}
                />
              </div>
            }
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <Card>
            <Image width="auto" height="auto" src={scanIcon} />
          </Card>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default SearchScan