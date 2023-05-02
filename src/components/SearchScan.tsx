import { ActionIcon, Card, createStyles, Grid, Image, Input } from "@mantine/core";
import searchIcon from '../assets/logos/search-icon.svg';
import React from 'react';
import scanIcon from '../assets/logos/scan.svg';

interface SearchProps {
  searchInput: any;
}

const useStyle = createStyles(() => ({
  scanItem: {
    background: "#FFFFFF",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: "20px",
  },
  searchItem: {
    background: "#FFFFFF",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: "20px",
    input: {
      fontSize: "12px",
    },
    "input:: placeholder": {
      fontSize: "12px",
    },
  },
}));

const SearchScan = ({ searchInput }: SearchProps) => {
      const { classes } = useStyle();

  return (
    <>
      <Grid pb={25}>
        <Grid.Col span={9}>
          <Input
            placeholder="Search..."
            className={classes.searchItem}
            size="xl"
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
          <ActionIcon size={60} className={classes.scanItem}>
            <Image width="auto" height="auto" src={scanIcon} />
          </ActionIcon>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default SearchScan