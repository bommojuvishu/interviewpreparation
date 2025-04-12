class Solution(object):
    def numIslands(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        def validpos(i,j):
    
            tmp = []
            res = []
            tmp.append([i-1, j])
            tmp.append([i+1, j])
            tmp.append([i, j+1])
            tmp.append([i, j-1])
    
            for x in tmp :
                
                posi= x[0]
                posy= x[1]
                
                if posi < len(grid) and posy < len(grid[0]) and posi >= 0  and  posy >= 0 :
                    
                    if str(grid[posi][posy]) == '1':
                        # print(x);
                     
                        tmppos =[posi,posy]
                        print("validpos X:",x[0],x[1],grid[posi][posy])
                        print(tmppos)
                        res.append(tmppos)
            print("valid Positions",res)
            return res

        def bfs(i,j):
            visited[(i,j)] = (i,j)
            que = []
            que.append([i,j])
            while  i< len(grid) and j < len(grid[0]):
                tmp = que.pop()
                posx= tmp[0]
                posy=tmp[1]
                visited[(posx,posy)] = (posx,posy)
                validpoints = validpos(posx,posy)
                for z in validpoints:
                    que.append([z[0],z[1]])


        noisland =0
        visited={}
        print(len(grid), len(grid[0]))
        print(grid[3][4])
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                print(i,j,grid[i][j])
                if (i,j) not in visited:
                    bfs(i,j)
                    noisland = noisland + 1
                else:
                    print(i,j,grid[i][j])

        
        return noisland
