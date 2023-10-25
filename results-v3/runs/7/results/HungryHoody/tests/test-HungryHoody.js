const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyaMLkGzA = await HungryHoody.new({from: accounts[4]});
		const addressxLnKppY = accounts[0]
		const uintozZ6EXc = BigInt("160")
		const addressGb7fOKN = accounts[4]
		const uintEFIqbmm = BigInt("1219")
		const uintqDhDeV = BigInt("1323")
		const uinthJZjv2v = await HungryHoodyaMLkGzA.balanceOf.call(addressxLnKppY, {from: accounts[4]});
		const boolcq7z6e = await HungryHoodyaMLkGzA.transfer.call(addressGb7fOKN, uintozZ6EXc, {from: accounts[2]});
		const uintFbCyObX = await HungryHoodyaMLkGzA.safeSub.call(uintqDhDeV, uintEFIqbmm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uinthJZjv2v, BigInt("0"))
		await expect(HungryHoodyaMLkGzA.transfer.call(addressGb7fOKN, uintozZ6EXc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyPOE058Y = await HungryHoody.new({from: accounts[5]});
		const uintUiB5Wg1 = BigInt("745")
		const uintk4mUJkd = BigInt("772")
		const uintaTJiAqF = BigInt("996")
		const addressd1Go2vr = accounts[4]
		const uintSxmQJZR = BigInt("1")
		const addresskg1WaF = accounts[2]
		const addressxtbMQ81 = accounts[1]
		const addressMyKoTCx = accounts[5]
		const addressmsl3zWk = accounts[0]
		const uintSxXykVV = BigInt("1744")
		const addressWLzG6ZU = accounts[0]
		const uintUqm3N0 = await HungryHoodyPOE058Y.safeMul.call(uintk4mUJkd, uintUiB5Wg1, {from: accounts[0]});
		const boolXXKo23u = await HungryHoodyPOE058Y.approve.call(addressd1Go2vr, uintaTJiAqF, {from: "0x0000000000000000000000000000000000000001"});
		const boolsoO7oMU = await HungryHoodyPOE058Y.approve.call(addresskg1WaF, uintSxmQJZR, {from: "0x0000000000000000000000000000000000000001"});
		const uintiPM61Qu = await HungryHoodyPOE058Y.allowance.call(addressMyKoTCx, addressxtbMQ81, {from: accounts[2]});
		const uintQu7BEb4 = await HungryHoodyPOE058Y.balanceOf.call(addressmsl3zWk, {from: accounts[4]});
		const boolvgWkdm7 = await HungryHoodyPOE058Y.transfer.call(addressWLzG6ZU, uintSxXykVV, {from: accounts[3]});

		assert.equal(boolXXKo23u, true)
		assert.equal(boolsoO7oMU, true)
		assert.equal(uintQu7BEb4, BigInt("0"))
		assert.equal(uintUqm3N0, BigInt("575140"))
		assert.equal(uintiPM61Qu, BigInt("0"))
		await expect(HungryHoodyPOE058Y.transfer.call(addressWLzG6ZU, uintSxXykVV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoody7RLmKA = await HungryHoody.new({from: accounts[5]});
		const addressyNg6kgd = accounts[3]
		const addressOvUv0X = accounts[1]
		const uintAVhmN9J = await HungryHoody7RLmKA.totalSupply.call({from: accounts[3]});
		const uintdx3MaA9 = await HungryHoody7RLmKA.allowance.call(addressOvUv0X, addressyNg6kgd, {from: accounts[3]});

		assert.equal(uintAVhmN9J, BigInt("25000000000000000000"))
		assert.equal(uintdx3MaA9, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyWW3gzez = await HungryHoody.new({from: accounts[1]});
		const uintRzwl6Ne = BigInt("1438")
		const uintDY9d4RX = BigInt("1383")
		const uintyuiQ6mu = BigInt("49")
		const addresseyLR4Hj = accounts[3]
		const uintzw3jwCk = await HungryHoodyWW3gzez.totalSupply.call({from: accounts[0]});
		const uintiJsDFQB = await HungryHoodyWW3gzez.safeDiv.call(uintDY9d4RX, uintRzwl6Ne, {from: "0x0000000000000000000000000000000000000001"});
		const uintFbAw6dB = await HungryHoodyWW3gzez.totalSupply.call({from: accounts[1]});
		const boolSoELKgI = await HungryHoodyWW3gzez.transfer.call(addresseyLR4Hj, uintyuiQ6mu, {from: accounts[1]});

		assert.equal(boolSoELKgI, true)
		assert.equal(uintFbAw6dB, BigInt("25000000000000000000"))
		assert.equal(uintiJsDFQB, BigInt("0"))
		assert.equal(uintzw3jwCk, BigInt("25000000000000000000"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoody7RLmKA = await HungryHoody.new({from: accounts[5]});
		const addressCe1tbUJ = accounts[4]
		const addresshMdcbjq = accounts[0]
		const uintR4eM8ZR = BigInt("1836")
		const uintodqHQQp = BigInt("1904")
		const uintEwfqYQQ = BigInt("2028")
		const addresshCJf2Us = accounts[2]
		const addressQ3gYN9B = accounts[2]
		const addresso5pIDLz = accounts[3]
		const addressatHALyA = accounts[1]
		const uintF7IIJrA = await HungryHoody7RLmKA.balanceOf.call(addressCe1tbUJ, {from: accounts[0]});
		const uintdadpi61 = await HungryHoody7RLmKA.balanceOf.call(addresshMdcbjq, {from: accounts[4]});
		const uintAVhmN9J = await HungryHoody7RLmKA.totalSupply.call({from: accounts[3]});
		const uintfBB8Fp = await HungryHoody7RLmKA.safeMul.call(uintodqHQQp, uintR4eM8ZR, {from: accounts[2]});
		const boolJufsjPl = await HungryHoody7RLmKA.transferFrom.call(addressQ3gYN9B, addresshCJf2Us, uintEwfqYQQ, {from: accounts[1]});
		const uintdx3MaA9 = await HungryHoody7RLmKA.allowance.call(addressatHALyA, addresso5pIDLz, {from: accounts[3]});

		assert.equal(uintAVhmN9J, BigInt("25000000000000000000"))
		assert.equal(uintF7IIJrA, BigInt("0"))
		assert.equal(uintdadpi61, BigInt("0"))
		assert.equal(uintfBB8Fp, BigInt("3495744"))
		await expect(HungryHoody7RLmKA.transferFrom.call(addressQ3gYN9B, addresshCJf2Us, uintEwfqYQQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodytMZLEGy = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrbePua7 = BigInt("1328")
		const uints18swo5 = BigInt("462")
		const uintHQQPFnE = BigInt("597")
		const uintfQqFY0J = BigInt("882")
		const addressEBHHBPn = "0x0000000000000000000000000000000000000001"
		const addressXOBrhH = accounts[3]
		const uintoDXzHX = BigInt("1431")
		const uintdbGdDl = BigInt("2028")
		const uintzFbn8zT = BigInt("279")
		const addressT0UPboJ = accounts[2]
		const uintBWAtXVc = BigInt("304")
		const uintqefQWJR = BigInt("1252")
		const uintZbITr6a = await HungryHoodytMZLEGy.safeSub.call(uints18swo5, uintrbePua7, {from: accounts[4]});
		const uintqB8QEv4 = await HungryHoodytMZLEGy.safeMul.call(uintfQqFY0J, uintHQQPFnE, {from: accounts[1]});
		const uintAmF7Zzz = await HungryHoodytMZLEGy.allowance.call(addressXOBrhH, addressEBHHBPn, {from: accounts[1]});
		const uintlIIDFlV = await HungryHoodytMZLEGy.safeAdd.call(uintdbGdDl, uintoDXzHX, {from: accounts[3]});
		const boolcN8DEE = await HungryHoodytMZLEGy.transfer.call(addressT0UPboJ, uintzFbn8zT, {from: accounts[0]});
		const uintgTwuJeE = await HungryHoodytMZLEGy.safeDiv.call(uintqefQWJR, uintBWAtXVc, {from: "0x0000000000000000000000000000000000000001"});
	});
})