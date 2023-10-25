const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentrancetIegTAM = await Reentrance.new({from: accounts[1]});
		const addressb6reTco = accounts[1]
		const addressyuS7BbB = accounts[2]
		const uintbpKlmv2 = BigInt("1086")
		const addressUeO06Qh = accounts[4]
		const uintdtqcg1 = await ReentrancetIegTAM.balanceOf.call(addressb6reTco, {from: accounts[0]});
		await ReentrancetIegTAM.topup.call({from: accounts[0]});
		const uintUtlG3c9 = await ReentrancetIegTAM.balanceOf.call(addressyuS7BbB, {from: accounts[4]});
		const uintcGFblb2 = await ReentrancetIegTAM.withdraw.call(uintbpKlmv2, {from: accounts[0]});
		const uintqulKILN = await ReentrancetIegTAM.balanceOf.call(addressUeO06Qh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintdtqcg1, BigInt("0"))
		await expect(ReentrancetIegTAM.topup.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceqPL5ey0 = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGdQyBDP = accounts[0]
		const uintCnncKwz = BigInt("771")
		const addressKfHcXQ5 = accounts[5]
		await ReentranceqPL5ey0.topup.call({from: accounts[3]});
		const uintxMlfrAr = await ReentranceqPL5ey0.balanceOf.call(addressGdQyBDP, {from: accounts[0]});
		const uintADxIQd = await ReentranceqPL5ey0.withdraw.call(uintCnncKwz, {from: accounts[3]});
		const uintBs5pBbo = await ReentranceqPL5ey0.balanceOf.call(addressKfHcXQ5, {from: accounts[5]});
	});
})