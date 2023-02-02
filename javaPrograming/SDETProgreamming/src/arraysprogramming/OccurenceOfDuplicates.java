package arraysprogramming;

public class OccurenceOfDuplicates {

	public static void main(String[] args) {
		int arr[]= {1,2,5,4,1,4,4};
		boolean flag[]=new boolean[arr.length];
		for (int i = 0; i < arr.length; i++) {
			int count=1;
			if(flag[i]==false) {
				for (int j = i+1; j < arr.length; j++) {

					{
						if(arr[i]==arr[j])
						{
							flag[j]=true;
							count++;
						}
					}
				}	
			}
			if(count>1)
				System.out.println("occurence of "+arr[i]+" is "+count);//to print occurence of  duplicates only


		}

	}

}
