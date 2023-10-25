const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractJEgn8UU = await DingoInu.new({from: accounts[3]});
		const tokensp3EexVj = BigInt("474")
		const spendersqD8VlT = accounts[5]
		const spenderwhDIayM = accounts[3]
		const tokenOwnerPivtIeA = accounts[2]
		const successrXLfUK8 = await contractJEgn8UU.approve.call(spendersqD8VlT, tokensp3EexVj, {from: accounts[4]});
		const remainingV6kV0jg = await contractJEgn8UU.allowance.call(tokenOwnerPivtIeA, spenderwhDIayM, {from: accounts[1]});

		assert.equal(remainingV6kV0jg, 0)
		assert.equal(successrXLfUK8, true)
	});

	it('test for DingoInu', async () => {
		const contractJXQYs7k = await DingoInu.new({from: accounts[2]});
		const tokenOwnerXOHC3CW = accounts[2]
		const tokensLH78bCK = BigInt("524")
		const spenderLzu8txz = accounts[3]
		const tokensz41TnN7 = BigInt("379")
		const tos0Ud81K = accounts[2]
		const balancevGzPI6B = await contractJXQYs7k.balanceOf.call(tokenOwnerXOHC3CW, {from: accounts[2]});
		const successRMIKSzf = await contractJXQYs7k.approve.call(spenderLzu8txz, tokensLH78bCK, {from: accounts[5]});
		const successE4wfBZH = await contractJXQYs7k.transfer.call(tos0Ud81K, tokensz41TnN7, {from: accounts[3]});

		assert.equal(balancevGzPI6B, 1000000000000000000000000000000)
		assert.equal(successRMIKSzf, true)
		await expect(contractJXQYs7k.transfer.call(tos0Ud81K, tokensz41TnN7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractUkSf43 = await DingoInu.new({from: accounts[3]});
		const tokensKPfIYe = BigInt("1950")
		const spender9YqGW4 = accounts[4]
		const tokensuzJczUQ = BigInt("1716")
		const toFSn2g6N = accounts[0]
		const fromsIe3OQw = "0x0000000000000000000000000000000000000001"
		const tokensK5RNinH = BigInt("260")
		const toMCgBm8G = accounts[2]
		const successBaa6ib9 = await contractUkSf43.approve.call(spender9YqGW4, tokensKPfIYe, {from: accounts[3]});
		const successQWphqbc = await contractUkSf43.transferFrom.call(fromsIe3OQw, toFSn2g6N, tokensuzJczUQ, {from: accounts[3]});
		const successTcnse7F = await contractUkSf43.transfer.call(toMCgBm8G, tokensK5RNinH, {from: accounts[5]});

		assert.equal(successBaa6ib9, true)
		await expect(contractUkSf43.transferFrom.call(fromsIe3OQw, toFSn2g6N, tokensuzJczUQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractawiHjN2 = await DingoInu.new({from: accounts[3]});
		const tokensYiIFpV0 = BigInt("474")
		const spenderBg5cd5W = accounts[5]
		const tokensy2BI7SU = BigInt("1043")
		const spenderBc09mNo = accounts[0]
		const spenderqWzVtrX = accounts[3]
		const tokenOwnerqc3L2XU = accounts[2]
		const successpcP65Nm = await contractawiHjN2.approve.call(spenderBg5cd5W, tokensYiIFpV0, {from: accounts[4]});
		const successfY2QNsr = await contractawiHjN2.approve.call(spenderBc09mNo, tokensy2BI7SU, {from: accounts[2]});
		const nulldurJgOU = await contractawiHjN2.totalSupply.call({from: accounts[4]});
		const remainingfdsYctt = await contractawiHjN2.allowance.call(tokenOwnerqc3L2XU, spenderqWzVtrX, {from: accounts[1]});

		assert.equal(nulldurJgOU, 1000000000000000000000000000000)
		assert.equal(remainingfdsYctt, 0)
		assert.equal(successfY2QNsr, true)
		assert.equal(successpcP65Nm, true)
	});

	it('test for DingoInu', async () => {
		const contractstxjor6 = await DingoInu.new({from: accounts[3]});
		const tokensNFXz4B2 = BigInt("474")
		const spenderNWzNj99 = accounts[5]
		const tokenswsemXYM = BigInt("307")
		const torZk4fbG = "0x0000000000000000000000000000000000000001"
		const tokensKp29GJq = BigInt("1939")
		const spenderPupljj5 = accounts[1]
		const spenderMuUfSoa = accounts[4]
		const tokenOwnerqvS9oJw = accounts[2]
		const successGq17dA = await contractstxjor6.approve.call(spenderNWzNj99, tokensNFXz4B2, {from: accounts[4]});
		const successSzVWMnE = await contractstxjor6.transfer.call(torZk4fbG, tokenswsemXYM, {from: accounts[3]});
		const successlLCorry = await contractstxjor6.approve.call(spenderPupljj5, tokensKp29GJq, {from: accounts[3]});
		const remainingFpmESAx = await contractstxjor6.allowance.call(tokenOwnerqvS9oJw, spenderMuUfSoa, {from: accounts[1]});

		assert.equal(remainingFpmESAx, 0)
		assert.equal(successGq17dA, true)
		assert.equal(successSzVWMnE, true)
		assert.equal(successlLCorry, true)
	});

	it('test for DingoInu', async () => {
		const contractx2BI7N = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensXaNrYK = BigInt("248")
		const tokGpOsFp = "0x0000000000000000000000000000000000000001"
		const tokenOwnerw8h26Be = accounts[1]
		const tokenOwnerBh1jKep = accounts[1]
		const tokensQVsXqWX = BigInt("1146")
		const spenderygcH8iv = accounts[4]
		const spenderthio2iy = accounts[0]
		const tokenOwnerbHVG0z = accounts[5]
		const successiv1fjSw = await contractx2BI7N.transfer.call(tokGpOsFp, tokensXaNrYK, {from: "0x0000000000000000000000000000000000000001"});
		const balancemnw2Lzp = await contractx2BI7N.balanceOf.call(tokenOwnerw8h26Be, {from: accounts[2]});
		const balancenN3ZgX = await contractx2BI7N.balanceOf.call(tokenOwnerBh1jKep, {from: accounts[1]});
		const successGKzU62I = await contractx2BI7N.approve.call(spenderygcH8iv, tokensQVsXqWX, {from: accounts[1]});
		const remaininglKlpb1 = await contractx2BI7N.allowance.call(tokenOwnerbHVG0z, spenderthio2iy, {from: accounts[4]});
	});
})