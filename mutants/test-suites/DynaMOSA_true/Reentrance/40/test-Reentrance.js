const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceercWsCW = await Reentrance.new({from: accounts[1]});
		const addressKASn1gz = "0x0000000000000000000000000000000000000001"
		const addresso8uS1Wt = accounts[3]
		const uintiTKQkGi = BigInt("442")
		const addressAnAqt2e = accounts[2]
		const uintivU6WlA = await ReentranceercWsCW.balanceOf.call(addressKASn1gz, {from: accounts[0]});
//		await ReentranceercWsCW.topup.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintznZTozu = await ReentranceercWsCW.balanceOf.call(addresso8uS1Wt, {from: "0x0000000000000000000000000000000000000001"});
//		await ReentranceercWsCW.topup.call({from: accounts[1]});
//		const uintH5sfEyJ = await ReentranceercWsCW.withdraw.call(uintiTKQkGi, {from: accounts[3]});
//		const uintt2Azz4y = await ReentranceercWsCW.balanceOf.call(addressAnAqt2e, {from: accounts[1]});

		assert.equal(uintivU6WlA, BigInt("0"))
		await expect(ReentranceercWsCW.topup.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentrancegVqLtkF = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addresssR2ELEl = accounts[2]
		const addressrVgOFp8 = accounts[2]
		const addressMJ8QQtR = accounts[1]
		const uinty61JCXf = BigInt("1")
		const addressf5l5UU8 = accounts[1]
		const uintJYNVmtn = await ReentrancegVqLtkF.balanceOf.call(addresssR2ELEl, {from: accounts[4]});
		await ReentrancegVqLtkF.topup.call({from: accounts[5]});
		const uintx5Ap0TK = await ReentrancegVqLtkF.balanceOf.call(addressrVgOFp8, {from: accounts[2]});
		const uintRZZcIBN = await ReentrancegVqLtkF.balanceOf.call(addressMJ8QQtR, {from: accounts[2]});
		const uintbEFpkQ5 = await ReentrancegVqLtkF.withdraw.call(uinty61JCXf, {from: accounts[4]});
		const uintZMMRTTV = await ReentrancegVqLtkF.balanceOf.call(addressf5l5UU8, {from: accounts[0]});
	});
})