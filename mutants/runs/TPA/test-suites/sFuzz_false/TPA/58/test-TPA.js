const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const stringxDcDyJ0 = "u8SLMBsH1NhKcj8N4"
		const stringGVsPmgc = "YO6"
		const uintyzzOhPv = BigInt("91")
		const TPAdSJHNgU = await TPA.new(stringxDcDyJ0, stringGVsPmgc, uintyzzOhPv, {from: accounts[1]});
		const addressLRuLIOc = accounts[3]
		const addressXnCFBLR = accounts[5]
		const addressmQX8gEp = accounts[0]
		const uint256FiDaeN5 = await TPAdSJHNgU.allowance.call(addressXnCFBLR, addressLRuLIOc, {from: accounts[2]});
		const stringDqad5Kf = await TPAdSJHNgU.symbol.call({from: accounts[0]});
		const addressxfZlmEZ = await TPAdSJHNgU.addAdmin.call(addressmQX8gEp, {from: "0x0000000000000000000000000000000000000001"});
		const stringhPLPk7l = await TPAdSJHNgU.name.call({from: accounts[3]});
	});

	it('test for TPA', async () => {
		const TPANyjpufe = await TPA.new({from: accounts[1]});
		const uinteTqTqdn = BigInt("2031")
		const uintFqg0kL = BigInt("1161")
		const addressInNemIe = accounts[3]
		const uintiG8Fo2n = BigInt("1472")
		const addressk1gTDxZ = accounts[3]
		const uintGqSeesP = BigInt("1876")
		const uintolmGTUu = BigInt("1501")
		const addressjz7aV9T = accounts[4]
		const uintGo2xK5u = BigInt("326")
		const addressQZsVuyg = accounts[1]
		const boolOBHpYdl = await TPANyjpufe.transferWithLock.call(addressInNemIe, uintFqg0kL, uinteTqTqdn, {from: accounts[2]});
		await TPANyjpufe.renounceAdmin.call({from: accounts[0]});
		const boolj0jv14x = await TPANyjpufe.approve.call(addressk1gTDxZ, uintiG8Fo2n, {from: accounts[3]});
		const boolpMUlagi = await TPANyjpufe.lock.call(addressjz7aV9T, uintolmGTUu, uintGqSeesP, {from: accounts[0]});
		const boolMxdaIwJ = await TPANyjpufe.increaseAllowance.call(addressQZsVuyg, uintGo2xK5u, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TPANyjpufe.transferWithLock.call(addressInNemIe, uintFqg0kL, uinteTqTqdn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPARpdcXz9 = await TPA.new({from: accounts[4]});
		const addressDxlddzv = "0x0000000000000000000000000000000000000001"
		const uintocoirKi = BigInt("1997")
		const addresstCt98vi = accounts[0]
		const uintyvUgia1 = BigInt("647")
		const addressezNfRK8 = accounts[5]
		const uint256lWNNMbm = await TPARpdcXz9.balanceOf.call(addressDxlddzv, {from: accounts[1]});
		const address0dCkkq = await TPARpdcXz9.burnFrom.call(addresstCt98vi, uintocoirKi, {from: accounts[5]});
		const boolpoFuRT = await TPARpdcXz9.transfer.call(addressezNfRK8, uintyvUgia1, {from: accounts[3]});
		await TPARpdcXz9.unpause.call({from: accounts[2]});

		assert.equal(uint256lWNNMbm, BigInt("0"))
		await expect(TPARpdcXz9.burnFrom.call(addresstCt98vi, uintocoirKi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAe3a1qm = await TPA.new({from: accounts[1]});
		const uintnnRJ0j = BigInt("2014")
		const addressw5m1qie = accounts[4]
		const uintPy3iGS = BigInt("537")
		const addressEsCxQl = accounts[1]
		const addressGfZNVyE = accounts[4]
		const boolBLiCHgp = await TPAe3a1qm.approve.call(addressw5m1qie, uintnnRJ0j, {from: accounts[0]});
		const boolmiZHwQ = await TPAe3a1qm.approve.call(addressEsCxQl, uintPy3iGS, {from: accounts[0]});
		await TPAe3a1qm.onlyAdmin.call({from: accounts[4]});
		const boolJvoQ78 = await TPAe3a1qm.isAdmin.call(addressGfZNVyE, {from: accounts[3]});

		assert.equal(boolBLiCHgp, true)
		assert.equal(boolmiZHwQ, true)
		await expect(TPAe3a1qm.onlyAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAWMYx6op = await TPA.new({from: accounts[1]});
		const uintFbdi1k = BigInt("20")
		const addresslJkNibr = accounts[3]
		const uintSTHJSm = BigInt("1657")
		const addressWVW6h0c = accounts[0]
		const addressaVawpHY = accounts[5]
		const uinthDYUVq5 = BigInt("1592")
		const addressbb9drI = accounts[0]
		const boolYL6o6nl = await TPAWMYx6op.transfer.call(addresslJkNibr, uintFbdi1k, {from: accounts[4]});
		const boolH08eKSG = await TPAWMYx6op.transferFrom.call(addressaVawpHY, addressWVW6h0c, uintSTHJSm, {from: accounts[3]});
		const booljYnqX2Y = await TPAWMYx6op.unlock.call(addressbb9drI, uinthDYUVq5, {from: accounts[3]});
		const uint8RlPfAlM = await TPAWMYx6op.decimals.call({from: accounts[2]});

		await expect(TPAWMYx6op.transfer.call(addresslJkNibr, uintFbdi1k, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAWMYx6op = await TPA.new({from: accounts[1]});
		const uintdE5nWR7 = BigInt("1635")
		const address1eq1cp = accounts[0]
		const addresszypXWwM = accounts[1]
		const uint7AoFed = BigInt("20")
		const addresslCckimH = accounts[3]
		const addresspP0vg9 = accounts[1]
		const uintiAAf6J0 = BigInt("1657")
		const address4KWAk3 = accounts[0]
		const addressH3bIvMU = accounts[6]
		const uinthJz7VgZ = BigInt("1592")
		const addresssh0EWrq = accounts[0]
		const uintauwczaX = BigInt("1205")
		const addressvaJRweV = accounts[3]
		const uintS5PZLdd = BigInt("925")
		const addresskWyjcGz = accounts[4]
		const addressrb3anX2 = accounts[4]
		const boolbZSOWS = await TPAWMYx6op.transferFrom.call(addresszypXWwM, address1eq1cp, uintdE5nWR7, {from: accounts[3]});
		const boolYL6o6nl = await TPAWMYx6op.transfer.call(addresslCckimH, uint7AoFed, {from: accounts[4]});
		const addressPtMUrD = await TPAWMYx6op.addAdmin.call(addresspP0vg9, {from: accounts[1]});
		const boolH08eKSG = await TPAWMYx6op.transferFrom.call(addressH3bIvMU, address4KWAk3, uintiAAf6J0, {from: accounts[3]});
		const booljYnqX2Y = await TPAWMYx6op.unlock.call(addresssh0EWrq, uinthJz7VgZ, {from: accounts[3]});
		const uint8RlPfAlM = await TPAWMYx6op.decimals.call({from: accounts[2]});
		const boolxCzr7B = await TPAWMYx6op.decreaseAllowance.call(addressvaJRweV, uintauwczaX, {from: "0x0000000000000000000000000000000000000001"});
		const boolXZCOL3r = await TPAWMYx6op.transferFrom.call(addressrb3anX2, addresskWyjcGz, uintS5PZLdd, {from: accounts[1]});

		await expect(TPAWMYx6op.transferFrom.call(addresszypXWwM, address1eq1cp, uintdE5nWR7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPASibI5sU = await TPA.new({from: accounts[2]});
		const uintpgaADgK = BigInt("1364")
		const addressq6K1daU = "0x0000000000000000000000000000000000000001"
		await TPASibI5sU.renounceAdmin.call({from: accounts[3]});
		const uint256kLwp7ph = await TPASibI5sU.burn.call(uintpgaADgK, {from: accounts[5]});
		const addresshkUjIud = await TPASibI5sU.transferOwnership.call(addressq6K1daU, {from: accounts[2]});
		const stringPVQ3GRB = await TPASibI5sU.name.call({from: accounts[2]});
		const stringoDfVUye = await TPASibI5sU.name.call({from: accounts[4]});

		await expect(TPASibI5sU.renounceAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPARpdcXz9 = await TPA.new({from: accounts[4]});
		const addressS7FmYLf = "0x0000000000000000000000000000000000000000"
		const uintwKJD0ke = BigInt("647")
		const addresswMpalNy = accounts[5]
		const uint256lWNNMbm = await TPARpdcXz9.balanceOf.call(addressS7FmYLf, {from: accounts[1]});
		const stringOpYRL1t = await TPARpdcXz9.symbol.call({from: accounts[1]});
		const boolpoFuRT = await TPARpdcXz9.transfer.call(addresswMpalNy, uintwKJD0ke, {from: accounts[3]});
		await TPARpdcXz9.unpause.call({from: accounts[2]});

		assert.equal(stringOpYRL1t, "TPA")
		assert.equal(uint256lWNNMbm, BigInt("0"))
		await expect(TPARpdcXz9.transfer.call(addresswMpalNy, uintwKJD0ke, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPARpdcXz9 = await TPA.new({from: accounts[4]});
		const addressJ8vO4Of = accounts[1]
		const addresstDJb1Oz = "0x0000000000000000000000000000000000000002"
		const booljP6iRgE = await TPARpdcXz9.isAdmin.call(addressJ8vO4Of, {from: accounts[1]});
		const uint256lWNNMbm = await TPARpdcXz9.balanceOf.call(addresstDJb1Oz, {from: accounts[1]});
		const stringGAMyaT0 = await TPARpdcXz9.name.call({from: accounts[3]});
		await TPARpdcXz9.unpause.call({from: accounts[2]});

		assert.equal(booljP6iRgE, false)
		assert.equal(stringGAMyaT0, "TPA")
		assert.equal(uint256lWNNMbm, BigInt("0"))
		await expect(TPARpdcXz9.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPARpdcXz9 = await TPA.new({from: accounts[4]});
		const addressprAwpX7 = "0x0000000000000000000000000000000000000001"
		const uintMC8y5jQ = BigInt("24")
		const address5ru8zh = accounts[4]
		const uint256lWNNMbm = await TPARpdcXz9.balanceOf.call(addressprAwpX7, {from: accounts[1]});
		const boolpHOgspg = await TPARpdcXz9.decreaseAllowance.call(address5ru8zh, uintMC8y5jQ, {from: "0x0000000000000000000000000000000000000001"});
		await TPARpdcXz9.unpause.call({from: accounts[2]});

		assert.equal(uint256lWNNMbm, BigInt("0"))
		await expect(TPARpdcXz9.decreaseAllowance.call(address5ru8zh, uintMC8y5jQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPARpdcXz9 = await TPA.new({from: accounts[4]});
		const addresss5gEvIy = "0x0000000000000000000000000000000000000000"
		const uintxniSWc = BigInt("987")
		const addressOcr9pqc = accounts[4]
		const uint256lWNNMbm = await TPARpdcXz9.balanceOf.call(addresss5gEvIy, {from: accounts[1]});
		const boolQiKpQht = await TPARpdcXz9.increaseAllowance.call(addressOcr9pqc, uintxniSWc, {from: "0x0000000000000000000000000000000000000001"});
		await TPARpdcXz9.unpause.call({from: accounts[2]});

		assert.equal(boolQiKpQht, true)
		assert.equal(uint256lWNNMbm, BigInt("0"))
		await expect(TPARpdcXz9.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPARpdcXz9 = await TPA.new({from: accounts[4]});
		const uintjAxasbq = BigInt("168")
		const addressAt224Ok = accounts[6]
		const addressWBE1AWC = accounts[3]
		const uintHo7Vqi = BigInt("715")
		const addressy3mNC3J = accounts[5]
		const boolyQEODOy = await TPARpdcXz9.paused.call({from: accounts[2]});
		const boolkPGrOr4 = await TPARpdcXz9.transferFrom.call(addressWBE1AWC, addressAt224Ok, uintjAxasbq, {from: accounts[1]});
		const stringOuQJV5h = await TPARpdcXz9.symbol.call({from: accounts[0]});
		await TPARpdcXz9.unpause.call({from: accounts[2]});
		const boolJFeBAnw = await TPARpdcXz9.decreaseAllowance.call(addressy3mNC3J, uintHo7Vqi, {from: accounts[5]});

		assert.equal(boolyQEODOy, false)
		await expect(TPARpdcXz9.transferFrom.call(addressWBE1AWC, addressAt224Ok, uintjAxasbq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPARpdcXz9 = await TPA.new({from: accounts[4]});
		const addresswYkTNqK = "0x0000000000000000000000000000000000000002"
		const addresshAI1hqZ = accounts[1]
		const addressBZRr7V2 = "0x0000000000000000000000000000000000000001"
		const uint256lWNNMbm = await TPARpdcXz9.balanceOf.call(addresswYkTNqK, {from: accounts[1]});
		const uint256yQy7mHD = await TPARpdcXz9.allowance.call(addressBZRr7V2, addresshAI1hqZ, {from: accounts[3]});
		await TPARpdcXz9.unpause.call({from: accounts[2]});

		assert.equal(uint256lWNNMbm, BigInt("0"))
		assert.equal(uint256yQy7mHD, BigInt("0"))
		await expect(TPARpdcXz9.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPARpdcXz9 = await TPA.new({from: accounts[4]});
		const addressgSyRPUI = "0x0000000000000000000000000000000000000000"
		const addressn4MmeQq = accounts[1]
		const uint8EPn5U6e = await TPARpdcXz9.decimals.call({from: accounts[0]});
		const uint256lWNNMbm = await TPARpdcXz9.balanceOf.call(addressgSyRPUI, {from: accounts[1]});
		const addressSeRaEX6 = await TPARpdcXz9.addAdmin.call(addressn4MmeQq, {from: accounts[3]});

		assert.equal(uint256lWNNMbm, BigInt("0"))
		assert.equal(uint8EPn5U6e, BigInt("18"))
		await expect(TPARpdcXz9.addAdmin.call(addressn4MmeQq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPARpdcXz9 = await TPA.new({from: accounts[4]});
		const addressEO5CLBY = "0x0000000000000000000000000000000000000000"
		const uintmvGnxxh = BigInt("425")
		const uint8LXVLha = await TPARpdcXz9.decimals.call({from: accounts[2]});
		const uint256lWNNMbm = await TPARpdcXz9.balanceOf.call(addressEO5CLBY, {from: accounts[1]});
		const uint256zlQrIJp = await TPARpdcXz9.burn.call(uintmvGnxxh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256lWNNMbm, BigInt("0"))
		assert.equal(uint8LXVLha, BigInt("18"))
		await expect(TPARpdcXz9.burn.call(uintmvGnxxh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPARpdcXz9 = await TPA.new({from: accounts[4]});
		const address834Fk6 = accounts[3]
		const uintnTKxdc = BigInt("668")
		const addressN5AFu4 = accounts[5]
		const addressdzNRBSK = await TPARpdcXz9.addAdmin.call(address834Fk6, {from: accounts[4]});
		const boolpoFuRT = await TPARpdcXz9.transfer.call(addressN5AFu4, uintnTKxdc, {from: accounts[3]});

		await expect(TPARpdcXz9.transfer.call(addressN5AFu4, uintnTKxdc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPARpdcXz9 = await TPA.new({from: accounts[4]});
		const addressZkB9o6X = "0x0000000000000000000000000000000000000001"
		const uint256StqLEkw = await TPARpdcXz9.totalSupply.call({from: accounts[0]});
		const uint256lWNNMbm = await TPARpdcXz9.balanceOf.call(addressZkB9o6X, {from: accounts[1]});
		await TPARpdcXz9.onlyAdmin.call({from: accounts[4]});

		assert.equal(uint256StqLEkw, BigInt("10000000000000000000000000000"))
		assert.equal(uint256lWNNMbm, BigInt("0"))
		await expect(TPARpdcXz9.onlyAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPARpdcXz9 = await TPA.new({from: accounts[4]});
		const addressJcH5Snq = "0x0000000000000000000000000000000000000001"
		const addressWZmi8hx = accounts[4]
		const addressLcm0Rw3 = accounts[0]
		const uint256lWNNMbm = await TPARpdcXz9.balanceOf.call(addressJcH5Snq, {from: accounts[1]});
		const booluaX7dsF = await TPARpdcXz9.isOwner.call(addressWZmi8hx, {from: accounts[1]});
		const uint256VDSUdek = await TPARpdcXz9.balanceOf.call(addressLcm0Rw3, {from: accounts[4]});

		assert.equal(booluaX7dsF, true)
		assert.equal(uint256VDSUdek, BigInt("0"))
		assert.equal(uint256lWNNMbm, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPARpdcXz9 = await TPA.new({from: accounts[4]});
		const addresstEBYUGL = accounts[2]
		const addressiuC0xnc = "0x0000000000000000000000000000000000000001"
		const addressGXKBh1K = accounts[4]
		const uintCINZTrH = BigInt("1146")
		const addressJoytuHZ = accounts[0]
		const addressN5glV0v = accounts[3]
		const addressKQZiT7x = await TPARpdcXz9.upgradeTo.call(addresstEBYUGL, {from: accounts[4]});
		const uint256lWNNMbm = await TPARpdcXz9.balanceOf.call(addressiuC0xnc, {from: accounts[1]});
		const uint256RAMIpai = await TPARpdcXz9.balanceOf.call(addressGXKBh1K, {from: accounts[3]});
		const boolistY97 = await TPARpdcXz9.decreaseAllowance.call(addressJoytuHZ, uintCINZTrH, {from: accounts[5]});
		const addresszWCvtDX = await TPARpdcXz9.addAdmin.call(addressN5glV0v, {from: accounts[3]});

		assert.equal(uint256RAMIpai, BigInt("10000000000000000000000000000"))
		assert.equal(uint256lWNNMbm, BigInt("0"))
		await expect(TPARpdcXz9.decreaseAllowance.call(addressJoytuHZ, uintCINZTrH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPARpdcXz9 = await TPA.new({from: accounts[4]});
		const uintwh6rEoJ = BigInt("461")
		const addressSiSKxU = accounts[4]
		const addressKefx9Xd = "0x0000000000000000000000000000000000000001"
		const uintXLZFcxO = BigInt("676")
		const addressZ15SjC = accounts[1]
		const boolQuTmufi = await TPARpdcXz9.unlock.call(addressSiSKxU, uintwh6rEoJ, {from: accounts[4]});
		const uint256lWNNMbm = await TPARpdcXz9.balanceOf.call(addressKefx9Xd, {from: accounts[1]});
		const boolltAQIzC = await TPARpdcXz9.transfer.call(addressZ15SjC, uintXLZFcxO, {from: accounts[5]});
		await TPARpdcXz9.onlyAdmin.call({from: accounts[3]});

		await expect(TPARpdcXz9.unlock.call(addressSiSKxU, uintwh6rEoJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPARpdcXz9 = await TPA.new({from: accounts[4]});
		const addressb2Cv5h0 = accounts[4]
		const addresszIUDPz9 = "0x0000000000000000000000000000000000000001"
		const boolzzY9LzG = await TPARpdcXz9.freezeAccount.call(addressb2Cv5h0, {from: accounts[4]});
		const uint256lWNNMbm = await TPARpdcXz9.balanceOf.call(addresszIUDPz9, {from: accounts[1]});

		assert.equal(boolzzY9LzG, true)
		assert.equal(uint256lWNNMbm, BigInt("0"))
	});
})