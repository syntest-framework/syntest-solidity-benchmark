const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceEzzsioL = await Reentrance.new({from: accounts[4]});
		const addressfSxzoX = accounts[5]
		const addressu14rmWn = accounts[4]
		const addresswcb3tN5 = accounts[0]
		const uintr77F0SC = await ReentranceEzzsioL.balanceOf.call(addressfSxzoX, {from: accounts[4]});
		const uintrFvzeJD = await ReentranceEzzsioL.balanceOf.call(addressu14rmWn, {from: accounts[1]});
		const uintAyGFGyF = await ReentranceEzzsioL.balanceOf.call(addresswcb3tN5, {from: accounts[2]});
		await ReentranceEzzsioL.topup.call({from: accounts[2]});

		assert.equal(uintAyGFGyF, BigInt("0"))
		assert.equal(uintr77F0SC, BigInt("0"))
		assert.equal(uintrFvzeJD, BigInt("0"))
		await expect(ReentranceEzzsioL.topup.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentrancenXk17o = await Reentrance.new({from: accounts[2]});
		const uintPBrNOlX = BigInt("1404")
		const addressGBd52kC = accounts[0]
		const addressWEmLmX = accounts[0]
		const addressCkbqyA3 = accounts[1]
		const addressKlic5PW = accounts[3]
		const uintDfKhdbb = await ReentrancenXk17o.withdraw.call(uintPBrNOlX, {from: accounts[1]});
		const uintgvHOB0u = await ReentrancenXk17o.balanceOf.call(addressGBd52kC, {from: accounts[3]});
		const uintJsKcwoN = await ReentrancenXk17o.balanceOf.call(addressWEmLmX, {from: accounts[5]});
		const uintMoslxlg = await ReentrancenXk17o.balanceOf.call(addressCkbqyA3, {from: accounts[1]});
		const uintYGA6Xb0 = await ReentrancenXk17o.balanceOf.call(addressKlic5PW, {from: accounts[1]});

		assert.equal(uintJsKcwoN, BigInt("0"))
		assert.equal(uintMoslxlg, BigInt("0"))
		assert.equal(uintYGA6Xb0, BigInt("0"))
		assert.equal(uintgvHOB0u, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentranceI1MDa6C = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintRPsu8bp = BigInt("1668")
		const uintY4cS9FZ = BigInt("657")
		const addressO0GLB81 = accounts[0]
		const uintYVUVfs = await ReentranceI1MDa6C.withdraw.call(uintRPsu8bp, {from: accounts[1]});
		const uintTaf0R2I = await ReentranceI1MDa6C.withdraw.call(uintY4cS9FZ, {from: accounts[3]});
		await ReentranceI1MDa6C.topup.call({from: accounts[4]});
		const uinthXIMjoM = await ReentranceI1MDa6C.balanceOf.call(addressO0GLB81, {from: accounts[3]});
	});

	it('test for Reentrance', async () => {
		const ReentranceZqMhTM = await Reentrance.new({from: accounts[0]});
		const uintbTWt7Fp = BigInt("367")
		const uintc0xBXGi = BigInt("0")
		const addressf72kR0i = "0x0000000000000000000000000000000000000001"
		const uintDkF52dm = BigInt("1476")
		const uintXhlItuk = await ReentranceZqMhTM.withdraw.call(uintbTWt7Fp, {from: "0x0000000000000000000000000000000000000001"});
		const uintOFFKHpn = await ReentranceZqMhTM.withdraw.call(uintc0xBXGi, {from: accounts[3]});
		const uintgY1MOmK = await ReentranceZqMhTM.balanceOf.call(addressf72kR0i, {from: accounts[0]});
		const uintHsQLFBA = await ReentranceZqMhTM.withdraw.call(uintDkF52dm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintgY1MOmK, BigInt("0"))
	});
})