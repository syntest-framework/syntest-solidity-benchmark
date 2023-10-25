const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractFOXV8gB = await DingoInu.new({from: accounts[4]});
		const tokensoApLhBf = BigInt("1019")
		const toDUDXXHX = accounts[1]
		const tokenOwnercZwl4Ke = "0x0000000000000000000000000000000000000001"
		const tokensnVZ8rV = BigInt("501")
		const tods8A3m = accounts[3]
		const tokenOwneruPCOt26 = accounts[5]
		const tokenOwnerdWrKg7e = accounts[5]
		const successip8y2OD = await contractFOXV8gB.transfer.call(toDUDXXHX, tokensoApLhBf, {from: accounts[1]});
		const balancejb4usM9 = await contractFOXV8gB.balanceOf.call(tokenOwnercZwl4Ke, {from: accounts[2]});
		const successzXcOcDj = await contractFOXV8gB.transfer.call(tods8A3m, tokensnVZ8rV, {from: accounts[5]});
		const balanceGkyxUSt = await contractFOXV8gB.balanceOf.call(tokenOwneruPCOt26, {from: accounts[5]});
		const balancepIlUlM1 = await contractFOXV8gB.balanceOf.call(tokenOwnerdWrKg7e, {from: accounts[0]});

		await expect(contractFOXV8gB.transfer.call(toDUDXXHX, tokensoApLhBf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractE8ftpYr = await DingoInu.new({from: accounts[2]});
		const spenderzFaoH6t = accounts[3]
		const tokenOwnerVEpbtK = accounts[3]
		const tokensuUqtMEZ = BigInt("232")
		const toFSiZQb9 = accounts[2]
		const fromp1PwLn6 = accounts[5]
		const tokensn3pNq7L = BigInt("876")
		const tofQj75Yw = "0x0000000000000000000000000000000000000001"
		const spenderedqQPVr = accounts[3]
		const tokenOwnerw13YAAL = accounts[1]
		const tokensFOtRpFm = BigInt("827")
		const tow1YzlmF = accounts[0]
		const remainingd6LVOYs = await contractE8ftpYr.allowance.call(tokenOwnerVEpbtK, spenderzFaoH6t, {from: accounts[2]});
		const nulluvxQRDX = await contractE8ftpYr.totalSupply.call({from: accounts[2]});
		const successOaFj1YY = await contractE8ftpYr.transferFrom.call(fromp1PwLn6, toFSiZQb9, tokensuUqtMEZ, {from: accounts[2]});
		const successcc18jfx = await contractE8ftpYr.transfer.call(tofQj75Yw, tokensn3pNq7L, {from: "0x0000000000000000000000000000000000000001"});
		const remainingbjWkGei = await contractE8ftpYr.allowance.call(tokenOwnerw13YAAL, spenderedqQPVr, {from: accounts[2]});
		const successFEDScIc = await contractE8ftpYr.transfer.call(tow1YzlmF, tokensFOtRpFm, {from: accounts[1]});

		assert.equal(nulluvxQRDX, 1000000000000000000000000000000)
		assert.equal(remainingd6LVOYs, 0)
		await expect(contractE8ftpYr.transferFrom.call(fromp1PwLn6, toFSiZQb9, tokensuUqtMEZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contracttSre5zN = await DingoInu.new({from: accounts[5]});
		const tokens3lc6PL = BigInt("116")
		const spenderZXyC6qb = accounts[4]
		const tokenOwnerpNvVXEv = accounts[5]
		const successRSNSlfL = await contracttSre5zN.approve.call(spenderZXyC6qb, tokens3lc6PL, {from: accounts[3]});
		const balanceZ2Sg4fk = await contracttSre5zN.balanceOf.call(tokenOwnerpNvVXEv, {from: accounts[0]});
		const nullHqmTmb = await contracttSre5zN.totalSupply.call({from: accounts[5]});

		assert.equal(balanceZ2Sg4fk, 1000000000000000000000000000000)
		assert.equal(nullHqmTmb, 1000000000000000000000000000000)
		assert.equal(successRSNSlfL, true)
	});

	it('test for DingoInu', async () => {
		const contractEBEomVM = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensNh1GrRw = BigInt("163")
		const toPG71qqw = accounts[3]
		const tokenscSkyng6 = BigInt("1912")
		const toNslAqzN = accounts[2]
		const fromsEVYXeU = accounts[0]
		const tokenOwnerWy0EMdu = accounts[2]
		const tokensY49Oleg = BigInt("2024")
		const spendersugcA4c = accounts[1]
		const tokenOwnerHwBc8qP = accounts[2]
		const successW81ZGQv = await contractEBEomVM.transfer.call(toPG71qqw, tokensNh1GrRw, {from: accounts[0]});
		const successKzPnsuH = await contractEBEomVM.transferFrom.call(fromsEVYXeU, toNslAqzN, tokenscSkyng6, {from: "0x0000000000000000000000000000000000000001"});
		const balancegbkMZqd = await contractEBEomVM.balanceOf.call(tokenOwnerWy0EMdu, {from: "0x0000000000000000000000000000000000000001"});
		const successDcR6bMH = await contractEBEomVM.approve.call(spendersugcA4c, tokensY49Oleg, {from: "0x0000000000000000000000000000000000000001"});
		const balancexkd26Z = await contractEBEomVM.balanceOf.call(tokenOwnerHwBc8qP, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DingoInu', async () => {
		const contractPEuBVTO = await DingoInu.new({from: accounts[2]});
		const tokensJ9N6xJI = BigInt("398")
		const toKeizziN = accounts[5]
		const tokensN5kucFK = BigInt("638")
		const toiFnYgWo = accounts[2]
		const successthbsPrU = await contractPEuBVTO.transfer.call(toKeizziN, tokensJ9N6xJI, {from: accounts[2]});
		const successTGoIlzR = await contractPEuBVTO.transfer.call(toiFnYgWo, tokensN5kucFK, {from: accounts[3]});

		assert.equal(successthbsPrU, true)
		await expect(contractPEuBVTO.transfer.call(toiFnYgWo, tokensN5kucFK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})