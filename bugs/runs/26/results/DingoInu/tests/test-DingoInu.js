const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractB7XyiTL = await DingoInu.new({from: accounts[2]});
		const tokenspmXy6hr = BigInt("1235")
		const spenderQ5uWLQO = accounts[3]
		const spenderVzm7oe = accounts[2]
		const tokenOwnerfJoeWK8 = "0x0000000000000000000000000000000000000001"
		const tokenOwneriU5OpP7 = accounts[3]
		const successZzizKhx = await contractB7XyiTL.approve.call(spenderQ5uWLQO, tokenspmXy6hr, {from: accounts[0]});
		const remainingRopdC7U = await contractB7XyiTL.allowance.call(tokenOwnerfJoeWK8, spenderVzm7oe, {from: accounts[2]});
		const balanceYL1TN0z = await contractB7XyiTL.balanceOf.call(tokenOwneriU5OpP7, {from: accounts[1]});
		const nullOJ8LDd = await contractB7XyiTL.totalSupply.call({from: accounts[2]});

		assert.equal(balanceYL1TN0z, 0)
		assert.equal(nullOJ8LDd, 1000000000000000000000000000000)
		assert.equal(remainingRopdC7U, 0)
		assert.equal(successZzizKhx, true)
	});

	it('test for DingoInu', async () => {
		const contracth3wgJo2 = await DingoInu.new({from: accounts[3]});
		const tokensi5qMCq = BigInt("1975")
		const spenderu9DXKH4 = accounts[4]
		const tokensSUTnJin = BigInt("945")
		const toyyhtny = "0x0000000000000000000000000000000000000001"
		const spendere9qSQfI = accounts[0]
		const tokenOwnerjdAJXTj = accounts[1]
		const successnW7oNG6 = await contracth3wgJo2.approve.call(spenderu9DXKH4, tokensi5qMCq, {from: accounts[0]});
		const successIV5LsJ8 = await contracth3wgJo2.transfer.call(toyyhtny, tokensSUTnJin, {from: accounts[1]});
		const remainingXzIhBFE = await contracth3wgJo2.allowance.call(tokenOwnerjdAJXTj, spendere9qSQfI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(successnW7oNG6, true)
		await expect(contracth3wgJo2.transfer.call(toyyhtny, tokensSUTnJin, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractcxM90x = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensEC1By8s = BigInt("1115")
		const spenderjoPBjdS = accounts[1]
		const tokenOwnerx609Tl = accounts[2]
		const successpfsETLE = await contractcxM90x.approve.call(spenderjoPBjdS, tokensEC1By8s, {from: accounts[4]});
		const balancej0bp113 = await contractcxM90x.balanceOf.call(tokenOwnerx609Tl, {from: accounts[4]});
	});

	it('test for DingoInu', async () => {
		const contractZzT4WWj = await DingoInu.new({from: accounts[4]});
		const tokensxvy3Xk3 = BigInt("1243")
		const tohlo1GB4 = accounts[0]
		const tokenOwnerRzdKUmi = accounts[0]
		const tokensCRuh6Ug = BigInt("1917")
		const totqgkH1w = accounts[4]
		const tokenOwnertzWDhHO = accounts[2]
		const tokenszAdMxNe = BigInt("131")
		const tozvAyG6a = accounts[1]
		const fromXjKxoKa = accounts[4]
		const successqfonBAr = await contractZzT4WWj.transfer.call(tohlo1GB4, tokensxvy3Xk3, {from: accounts[4]});
		const balancegfx7agG = await contractZzT4WWj.balanceOf.call(tokenOwnerRzdKUmi, {from: accounts[1]});
		const successs8uOoj = await contractZzT4WWj.transfer.call(totqgkH1w, tokensCRuh6Ug, {from: accounts[0]});
		const balancer8bC55A = await contractZzT4WWj.balanceOf.call(tokenOwnertzWDhHO, {from: accounts[3]});
		const successTxsgby = await contractZzT4WWj.transferFrom.call(fromXjKxoKa, tozvAyG6a, tokenszAdMxNe, {from: accounts[3]});
		const nullVp3r8JZ = await contractZzT4WWj.totalSupply.call({from: accounts[0]});

		assert.equal(balancegfx7agG, 0)
		assert.equal(successqfonBAr, true)
		await expect(contractZzT4WWj.transfer.call(totqgkH1w, tokensCRuh6Ug, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractwRfjgJ1 = await DingoInu.new({from: accounts[3]});
		const tokensFOBiIjK = BigInt("1542")
		const spenderSdpX20I = accounts[3]
		const tokenOwnerQ6UTs4l = accounts[0]
		const tokenstcHMBBk = BigInt("1785")
		const toY2Ttx6l = "0x0000000000000000000000000000000000000001"
		const fromgNMRDjd = accounts[2]
		const successxf7HTRf = await contractwRfjgJ1.approve.call(spenderSdpX20I, tokensFOBiIjK, {from: accounts[2]});
		const balanceoILNadr = await contractwRfjgJ1.balanceOf.call(tokenOwnerQ6UTs4l, {from: accounts[1]});
		const successGSbRNEn = await contractwRfjgJ1.transferFrom.call(fromgNMRDjd, toY2Ttx6l, tokenstcHMBBk, {from: accounts[1]});

		assert.equal(balanceoILNadr, 0)
		assert.equal(successxf7HTRf, true)
		await expect(contractwRfjgJ1.transferFrom.call(fromgNMRDjd, toY2Ttx6l, tokenstcHMBBk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})