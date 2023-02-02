package arraysprogramming;

public class ToRemoveDuplicates {
	public static void main(String[] args) {
		int arr[]= {1,2,5,4,1,4,4};
		boolean flag[]=new boolean[arr.length];
		int duplicate=0;
		for (int i = 0; i < arr.length; i++) {
			int count=1;
			for (int j = i+1; j < arr.length; j++) {
				if(flag[i]==false) {
					if(arr[i]==arr[j])
					{
						flag[j]=true;
						duplicate++;
					}
				}
			}	
		}
		int arr1[]=new int[arr.length-duplicate];
		int k=0;
		for (int i = 0; i < arr.length; i++) {
			if(flag[i]==false) 
				arr1[k++]=arr[i];

		}

		for(int a:arr1) {
			System.out.print(a+" ");
		}


	}
}
