const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const Reentrancewfq9JNo = await Reentrance.new({from: accounts[0]});
		const addressgDGQR3k = accounts[0]
		const uintJFxhI2w = BigInt("917")
		const addressjCtbCY0 = "0x0000000000000000000000000000000000000001"
//		await Reentrancewfq9JNo.topup.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintdy4d3OD = await Reentrancewfq9JNo.balanceOf.call(addressgDGQR3k, {from: accounts[1]});
//		const uintkm0yKMW = await Reentrancewfq9JNo.withdraw.call(uintJFxhI2w, {from: accounts[4]});
//		const uintsq7VUHz = await Reentrancewfq9JNo.balanceOf.call(addressjCtbCY0, {from: accounts[1]});

		await expect(Reentrancewfq9JNo.topup.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const Reentrancear0Gi6C = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressPNoUN1A = accounts[1]
		const addressw0ZMuDo = accounts[4]
		const uinttk0FcIU = BigInt("897")
		const uintkfM1bsR = await Reentrancear0Gi6C.balanceOf.call(addressPNoUN1A, {from: accounts[0]});
		const uintBexwPWh = await Reentrancear0Gi6C.balanceOf.call(addressw0ZMuDo, {from: accounts[0]});
		const uinte6GjNqF = await Reentrancear0Gi6C.withdraw.call(uinttk0FcIU, {from: accounts[3]});
		await Reentrancear0Gi6C.topup.call({from: accounts[3]});
		await Reentrancear0Gi6C.topup.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Reentrance', async () => {
		const ReentrancelLXT8q = await Reentrance.new({from: accounts[0]});
		const uintbc1zsk = BigInt("0")
		const addressi8VuDBK = accounts[2]
		const addressOeRmLwq = accounts[2]
		const addressVgMOrYE = accounts[3]
		const addressaPkSMLo = accounts[1]
		const uintByAgDQ = BigInt("755")
//		await ReentrancelLXT8q.topup.call({from: accounts[0]});
//		await ReentrancelLXT8q.topup.call({from: accounts[1]});
//		const uintwXAeDbP = await ReentrancelLXT8q.withdraw.call(uintbc1zsk, {from: accounts[5]});
//		const uintHCMdZ73 = await ReentrancelLXT8q.balanceOf.call(addressi8VuDBK, {from: accounts[0]});
//		await ReentrancelLXT8q.topup.call({from: accounts[3]});
//		const uintoeXJAIR = await ReentrancelLXT8q.balanceOf.call(addressOeRmLwq, {from: accounts[3]});
//		const uintv1B56Hq = await ReentrancelLXT8q.balanceOf.call(addressVgMOrYE, {from: accounts[2]});
//		await ReentrancelLXT8q.topup.call({from: accounts[3]});
//		const uintZDoAs6G = await ReentrancelLXT8q.balanceOf.call(addressaPkSMLo, {from: accounts[3]});
//		const uintCkTka4f = await ReentrancelLXT8q.withdraw.call(uintByAgDQ, {from: accounts[2]});

		await expect(ReentrancelLXT8q.topup.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})