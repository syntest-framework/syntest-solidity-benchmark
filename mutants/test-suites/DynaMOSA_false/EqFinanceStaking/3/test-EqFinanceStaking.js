const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingEoGpeGE = await EqFinanceStaking.new({from: accounts[3]});
		const addressAdiDYhX = accounts[1]
		const uintFJ0Y4JK = BigInt("884")
		const addressafm6Jco = await EqFinanceStakingEoGpeGE.transferOwnership.call(addressAdiDYhX, {from: accounts[3]});
//		const uintwg6up6K = await EqFinanceStakingEoGpeGE.deposit.call(uintFJ0Y4JK, {from: "0x0000000000000000000000000000000000000001"});
//		const uintHQWafpl = await EqFinanceStakingEoGpeGE.getStakingAndDaoAmount.call({from: accounts[4]});
//		await EqFinanceStakingEoGpeGE.claimDivs.call({from: accounts[2]});

		await expect(EqFinanceStakingEoGpeGE.deposit.call(uintFJ0Y4JK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingjwxCBxf = await EqFinanceStaking.new({from: accounts[2]});
		const addressTJSNi05 = accounts[4]
		const uintJtoJx79 = BigInt("497")
		const addresszMeAowf = accounts[1]
		const addressDQpUA3 = accounts[3]
		const uintY2PFhB = await EqFinanceStakingjwxCBxf.getStakingAndDaoAmount.call({from: accounts[1]});
		const addressAjgBWNj = await EqFinanceStakingjwxCBxf.transferOwnership.call(addressTJSNi05, {from: accounts[2]});
//		await EqFinanceStakingjwxCBxf.onlyOwner.call({from: accounts[0]});
//		const addressvnZS3O = await EqFinanceStakingjwxCBxf.transferAnyERC20Tokens.call(addressDQpUA3, addresszMeAowf, uintJtoJx79, {from: accounts[4]});
//		await EqFinanceStakingjwxCBxf.claimDivs.call({from: accounts[1]});
//		await EqFinanceStakingjwxCBxf.onlyOwner.call({from: accounts[5]});

		assert.equal(uintY2PFhB, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingjwxCBxf.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingXA2ejz = await EqFinanceStaking.new({from: accounts[5]});
		const addressVSSHBS3 = accounts[1]
		const uintxXWceJx = await EqFinanceStakingXA2ejz.getNumberOfHolders.call({from: accounts[0]});
//		await EqFinanceStakingXA2ejz.claimDivs.call({from: accounts[3]});
//		const uintaQeOhN = await EqFinanceStakingXA2ejz.getNumberOfHolders.call({from: accounts[2]});
//		const addressLnUxR7F = await EqFinanceStakingXA2ejz.transferOwnership.call(addressVSSHBS3, {from: accounts[2]});
//		await EqFinanceStakingXA2ejz.claimDivs.call({from: accounts[1]});

		assert.equal(uintxXWceJx, BigInt("0"))
		await expect(EqFinanceStakingXA2ejz.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStaking2t2NHt = await EqFinanceStaking.new({from: accounts[3]});
		const addressyKaRkVG = accounts[4]
		const uintROzUpDE = BigInt("119")
		const uintou8QRFk = await EqFinanceStaking2t2NHt.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
		const addressE6Lkbcp = await EqFinanceStaking2t2NHt.transferOwnership.call(addressyKaRkVG, {from: accounts[3]});
//		const uint0dIbJF = await EqFinanceStaking2t2NHt.withdraw.call(uintROzUpDE, {from: accounts[1]});

		assert.equal(uintou8QRFk, BigInt("0"))
		await expect(EqFinanceStaking2t2NHt.withdraw.call(uintROzUpDE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingqHazt6D = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressn9bvMFf = accounts[2]
		const uintZdu4FqH = BigInt("151")
		const uintNRgIC84 = BigInt("1276")
		const addressLm3MXMe = accounts[2]
		const addressJSZSolt = accounts[4]
		const uintyMeyXZ = await EqFinanceStakingqHazt6D.getPendingDivs.call(addressn9bvMFf, {from: accounts[0]});
		const uintPrKCkJ = await EqFinanceStakingqHazt6D.deposit.call(uintZdu4FqH, {from: accounts[4]});
		const addressvbhUHPw = await EqFinanceStakingqHazt6D.transferAnyERC20Tokens.call(addressJSZSolt, addressLm3MXMe, uintNRgIC84, {from: accounts[4]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingKQiysj = await EqFinanceStaking.new({from: accounts[1]});
		const uintG1WaUbb = BigInt("801")
		const addressAd30eGp = accounts[0]
		const address0G7NeF = accounts[1]
		const addressSEpVTmI = "0x0000000000000000000000000000000000000001"
		const uintGiON3Gc = BigInt("1603")
		const uint4guKfz = BigInt("874")
//		const addressEHcLq4j = await EqFinanceStakingKQiysj.transferAnyERC20Tokens.call(address0G7NeF, addressAd30eGp, uintG1WaUbb, {from: accounts[1]});
//		const addressSe977My = await EqFinanceStakingKQiysj.transferOwnership.call(addressSEpVTmI, {from: accounts[3]});
//		const uintEkaub0W = await EqFinanceStakingKQiysj.deposit.call(uintGiON3Gc, {from: "0x0000000000000000000000000000000000000001"});
//		const uintO4aaWf3 = await EqFinanceStakingKQiysj.deposit.call(uint4guKfz, {from: accounts[1]});

		await expect(EqFinanceStakingKQiysj.transferAnyERC20Tokens.call(address0G7NeF, addressAd30eGp, uintG1WaUbb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingmeMAJte = await EqFinanceStaking.new({from: accounts[2]});
		const addresskdteat = accounts[0]
		const uintysYKyNo = BigInt("0")
		const uintL3XHU3E = await EqFinanceStakingmeMAJte.getPendingDivs.call(addresskdteat, {from: accounts[1]});
//		await EqFinanceStakingmeMAJte.claimDivs.call({from: accounts[1]});
		await EqFinanceStakingmeMAJte.claimDivs.call({from: accounts[1]});
//		const uintPUkFFiK = await EqFinanceStakingmeMAJte.deposit.call(uintysYKyNo, {from: accounts[4]});
//		const uintQhIcuh8 = await EqFinanceStakingmeMAJte.getStakingAndDaoAmount.call({from: accounts[0]});
//		await EqFinanceStakingmeMAJte.onlyOwner.call({from: accounts[4]});

		assert.equal(uintL3XHU3E, BigInt("0"))
		await expect(EqFinanceStakingmeMAJte.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})