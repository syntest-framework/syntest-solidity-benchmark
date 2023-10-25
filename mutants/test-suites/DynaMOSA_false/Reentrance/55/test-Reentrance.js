const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentrancevCVHaNO = await Reentrance.new({from: accounts[2]});
		const addresshFV6SpH = accounts[3]
		const uintBGw2KWA = BigInt("807")
		const addressr7zbuWl = accounts[3]
		const uintRucpZP1 = await ReentrancevCVHaNO.balanceOf.call(addresshFV6SpH, {from: accounts[3]});
		const uintdMiMzD = await ReentrancevCVHaNO.withdraw.call(uintBGw2KWA, {from: accounts[4]});
		const uintAz15zI = await ReentrancevCVHaNO.balanceOf.call(addressr7zbuWl, {from: accounts[1]});

		assert.equal(uintAz15zI, BigInt("0"))
		assert.equal(uintRucpZP1, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentranceoCtd9QF = await Reentrance.new({from: accounts[2]});
		const addressAAghBeC = accounts[4]
		const uintKWlSBZf = BigInt("1638")
//		await ReentranceoCtd9QF.topup.call({from: accounts[4]});
//		const uintQI4dncQ = await ReentranceoCtd9QF.balanceOf.call(addressAAghBeC, {from: accounts[2]});
//		await ReentranceoCtd9QF.topup.call({from: accounts[3]});
//		const uintP6Vxm0 = await ReentranceoCtd9QF.withdraw.call(uintKWlSBZf, {from: accounts[1]});
//		await ReentranceoCtd9QF.topup.call({from: accounts[1]});

		await expect(ReentranceoCtd9QF.topup.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentrancegCE9rZu = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const uint7RYDvU = BigInt("201")
		const addressEOnLcfE = accounts[2]
		const addressXQoG1ga = accounts[3]
		const addressSqbGiZ = accounts[5]
		const uintCjUbuaY = await ReentrancegCE9rZu.withdraw.call(uint7RYDvU, {from: accounts[3]});
		const uintGMMcGPo = await ReentrancegCE9rZu.balanceOf.call(addressEOnLcfE, {from: accounts[4]});
		const uintI8RcLE = await ReentrancegCE9rZu.balanceOf.call(addressXQoG1ga, {from: accounts[5]});
		const uintb6UYk4G = await ReentrancegCE9rZu.balanceOf.call(addressSqbGiZ, {from: accounts[3]});
		await ReentrancegCE9rZu.topup.call({from: accounts[2]});
	});
})