const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractdvVs8Iq = await DingoInu.new({from: accounts[4]});
		const tokenskaZ2HS = BigInt("974")
		const toA7wsrqO = accounts[3]
		const tokensRimClYy = BigInt("1963")
		const tofBdNim = accounts[2]
		const tokenso5s4foD = BigInt("1980")
		const tow9POUS2 = accounts[1]
		const successSdkRlEr = await contractdvVs8Iq.transfer.call(toA7wsrqO, tokenskaZ2HS, {from: accounts[3]});
		const successDCeDM4W = await contractdvVs8Iq.transfer.call(tofBdNim, tokensRimClYy, {from: accounts[3]});
		const successbohr9Qv = await contractdvVs8Iq.transfer.call(tow9POUS2, tokenso5s4foD, {from: accounts[0]});
		const nullNXfwPFz = await contractdvVs8Iq.totalSupply.call({from: accounts[3]});

		await expect(contractdvVs8Iq.transfer.call(toA7wsrqO, tokenskaZ2HS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractYgUIXzf = await DingoInu.new({from: accounts[1]});
		const tokenswKOMI4 = BigInt("395")
		const toWMji35t = accounts[4]
		const fromyrcpEcF = accounts[4]
		const tokenOwnerVbDgziM = accounts[1]
		const tokensRVn9FE = BigInt("1671")
		const todfolNQL = "0x0000000000000000000000000000000000000001"
		const successjBjhqt = await contractYgUIXzf.transferFrom.call(fromyrcpEcF, toWMji35t, tokenswKOMI4, {from: accounts[2]});
		const balancemYODV9S = await contractYgUIXzf.balanceOf.call(tokenOwnerVbDgziM, {from: accounts[4]});
		const successZDqeNml = await contractYgUIXzf.transfer.call(todfolNQL, tokensRVn9FE, {from: accounts[3]});

		await expect(contractYgUIXzf.transferFrom.call(fromyrcpEcF, toWMji35t, tokenswKOMI4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractl93Kj8v = await DingoInu.new({from: accounts[2]});
		const tokenskbqxSA = BigInt("806")
		const spenderyoCgeu = accounts[2]
		const tokensltbX0mk = BigInt("1612")
		const toIBKBfmh = accounts[3]
		const fromFVTT1ZP = accounts[3]
		const tokensZ5GVQS = BigInt("58")
		const toz1k3Wuj = accounts[3]
		const fromgx4QbGJ = accounts[3]
		const tokenscnUXWkA = BigInt("452")
		const spenderwaRi9st = accounts[1]
		const tokenOwnerW9RWkMT = accounts[2]
		const successHwalXwx = await contractl93Kj8v.approve.call(spenderyoCgeu, tokenskbqxSA, {from: accounts[0]});
		const successIloitJ = await contractl93Kj8v.transferFrom.call(fromFVTT1ZP, toIBKBfmh, tokensltbX0mk, {from: accounts[1]});
		const successAX6LmTS = await contractl93Kj8v.transferFrom.call(fromgx4QbGJ, toz1k3Wuj, tokensZ5GVQS, {from: "0x0000000000000000000000000000000000000001"});
		const successzgj0h7E = await contractl93Kj8v.approve.call(spenderwaRi9st, tokenscnUXWkA, {from: accounts[0]});
		const nullFzTofVX = await contractl93Kj8v.totalSupply.call({from: accounts[4]});
		const balancepaJDUEc = await contractl93Kj8v.balanceOf.call(tokenOwnerW9RWkMT, {from: accounts[3]});

		assert.equal(successHwalXwx, true)
		await expect(contractl93Kj8v.transferFrom.call(fromFVTT1ZP, toIBKBfmh, tokensltbX0mk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractUJUouQ = await DingoInu.new({from: accounts[2]});
		const spenderyBsRdLA = accounts[2]
		const tokenOwnermo2OlGD = accounts[5]
		const tokenOwnerwo4nFxV = accounts[3]
		const tokenOwnerob2QXMw = accounts[0]
		const tokensFy0xwLL = BigInt("1969")
		const spenderS5SsDqO = accounts[3]
		const remainingIZjfgKk = await contractUJUouQ.allowance.call(tokenOwnermo2OlGD, spenderyBsRdLA, {from: accounts[2]});
		const balancekoDUaRg = await contractUJUouQ.balanceOf.call(tokenOwnerwo4nFxV, {from: accounts[4]});
		const nullk5AXQTq = await contractUJUouQ.totalSupply.call({from: accounts[5]});
		const balanceYAaw1dJ = await contractUJUouQ.balanceOf.call(tokenOwnerob2QXMw, {from: accounts[0]});
		const successcIgs1VT = await contractUJUouQ.approve.call(spenderS5SsDqO, tokensFy0xwLL, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(balanceYAaw1dJ, 0)
		assert.equal(balancekoDUaRg, 0)
		assert.equal(nullk5AXQTq, 1000000000000000000000000000000)
		assert.equal(remainingIZjfgKk, 0)
		assert.equal(successcIgs1VT, true)
	});

	it('test for DingoInu', async () => {
		const contractIfN1ZwP = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenOwnerg3IxUpO = accounts[3]
		const tokens2rDcv8 = BigInt("1567")
		const spenderQb9r7HZ = accounts[1]
		const spenderm5NeHVK = accounts[0]
		const tokenOwnerVXUmEQ2 = accounts[0]
		const spenderQ5RKNxB = accounts[3]
		const tokenOwnerm6JGvqv = accounts[0]
		const tokenszcW2Sbl = BigInt("419")
		const spenderqMm6SQC = accounts[0]
		const balancefFVRnF0 = await contractIfN1ZwP.balanceOf.call(tokenOwnerg3IxUpO, {from: accounts[0]});
		const successujjqn99 = await contractIfN1ZwP.approve.call(spenderQb9r7HZ, tokens2rDcv8, {from: accounts[4]});
		const remainingJUJkClC = await contractIfN1ZwP.allowance.call(tokenOwnerVXUmEQ2, spenderm5NeHVK, {from: "0x0000000000000000000000000000000000000001"});
		const remainingU41TlNi = await contractIfN1ZwP.allowance.call(tokenOwnerm6JGvqv, spenderQ5RKNxB, {from: accounts[4]});
		const successknXLu5h = await contractIfN1ZwP.approve.call(spenderqMm6SQC, tokenszcW2Sbl, {from: accounts[3]});
	});

	it('test for DingoInu', async () => {
		const contractGhPRlVM = await DingoInu.new({from: accounts[1]});
		const tokensB4FK3gq = BigInt("1411")
		const spenderEyKnVmU = accounts[0]
		const tokensBsS7P9 = BigInt("736")
		const toofoUIK0 = accounts[1]
		const tokensCBT2EOf = BigInt("1219")
		const spenderrwsMdlX = accounts[1]
		const tokenOwnerL0tGy7I = accounts[2]
		const successVAKEz57 = await contractGhPRlVM.approve.call(spenderEyKnVmU, tokensB4FK3gq, {from: accounts[3]});
		const successbyKxjLP = await contractGhPRlVM.transfer.call(toofoUIK0, tokensBsS7P9, {from: accounts[1]});
		const successOYii5L = await contractGhPRlVM.approve.call(spenderrwsMdlX, tokensCBT2EOf, {from: accounts[0]});
		const balanceKaLuAvC = await contractGhPRlVM.balanceOf.call(tokenOwnerL0tGy7I, {from: accounts[4]});

		assert.equal(balanceKaLuAvC, 0)
		assert.equal(successOYii5L, true)
		assert.equal(successVAKEz57, true)
		assert.equal(successbyKxjLP, true)
	});
})