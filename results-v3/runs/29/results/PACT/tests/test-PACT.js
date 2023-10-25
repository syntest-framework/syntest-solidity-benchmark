const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTLNay0G = await PACT.new({from: accounts[5]});
		const uintXrruB4 = BigInt("1510")
		const addressAT0TqoW = accounts[2]
		const addressZJy9diy = accounts[4]
		const uintCaXF7G = BigInt("114")
		const addressiFxDnhE = accounts[0]
		const addressTVLx94 = accounts[1]
		const addressdSy2GTo = accounts[1]
		const addressiGzQoYH = accounts[0]
		const uint8nMGR0ka = await PACTLNay0G.decimals.call({from: accounts[0]});
		const boolsRvLS0i = await PACTLNay0G.transferFrom.call(addressZJy9diy, addressAT0TqoW, uintXrruB4, {from: accounts[3]});
		const boolyouweGG = await PACTLNay0G.transferFrom.call(addressTVLx94, addressiFxDnhE, uintCaXF7G, {from: accounts[2]});
		const uintfKWoF4 = await PACTLNay0G.allowance.call(addressiGzQoYH, addressdSy2GTo, {from: accounts[3]});

		assert.equal(uint8nMGR0ka, BigInt("18"))
		await expect(PACTLNay0G.transferFrom.call(addressZJy9diy, addressAT0TqoW, uintXrruB4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTnJ8dmxR = await PACT.new({from: accounts[3]});
		const addressTeeBvgx = accounts[0]
		const addresspc0Ov0e = accounts[5]
		const addressKSJ7nS6 = accounts[3]
		const uintsjb4lHM = await PACTnJ8dmxR.balanceOf.call(addressTeeBvgx, {from: accounts[5]});
		const boolLNYb5vI = await PACTnJ8dmxR.setupBasePool.call(addresspc0Ov0e, {from: accounts[2]});
		const uint8wkWUxR9 = await PACTnJ8dmxR.decimals.call({from: accounts[4]});
		const uintFJacoDO = await PACTnJ8dmxR.balanceOf.call(addressKSJ7nS6, {from: accounts[3]});

		assert.equal(uintsjb4lHM, BigInt("0"))
		await expect(PACTnJ8dmxR.setupBasePool.call(addresspc0Ov0e, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTRfF8iN = await PACT.new({from: accounts[5]});
		const addressBiQp1Ls = accounts[2]
		const addressA4fLmXE = "0x0000000000000000000000000000000000000001"
		const addressrwUZCBc = accounts[1]
		const addressrDrXzOf = accounts[3]
		const addressRCN0twD = accounts[2]
		const boolMSorD8z = await PACTRfF8iN.setupTeam.call(addressBiQp1Ls, {from: accounts[1]});
		const boolrhvTpcx = await PACTRfF8iN.setupBasePool.call(addressA4fLmXE, {from: accounts[3]});
		const boolaDY11w8 = await PACTRfF8iN.setupTeam.call(addressrwUZCBc, {from: accounts[2]});
		const uintNeZhsEk = await PACTRfF8iN.allowance.call(addressRCN0twD, addressrDrXzOf, {from: accounts[3]});

		await expect(PACTRfF8iN.setupTeam.call(addressBiQp1Ls, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTu72n9u = await PACT.new({from: accounts[2]});
		const addressZWypdBE = accounts[3]
		const addresssitq6zS = accounts[0]
		const uintvZTWDkz = BigInt("1284")
		const addressQeaEUu = accounts[3]
		const addressjw82IJ6 = accounts[0]
		const uinti8mUAOH = await PACTu72n9u.allowance.call(addresssitq6zS, addressZWypdBE, {from: accounts[4]});
		const boolwh5SGZS = await PACTu72n9u.burn.call(addressQeaEUu, uintvZTWDkz, {from: accounts[3]});
		const booldOfyAPb = await PACTu72n9u.setupRewards.call(addressjw82IJ6, {from: accounts[2]});

		assert.equal(uinti8mUAOH, BigInt("0"))
		await expect(PACTu72n9u.burn.call(addressQeaEUu, uintvZTWDkz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTtb0mO88 = await PACT.new({from: accounts[2]});
		const addressP5upKFt = accounts[1]
		const addressEFMtvuB = accounts[3]
		const address26NAPz = accounts[4]
		const addressuvt7nNt = accounts[2]
		const uintXmz9S7n = BigInt("363")
		const addressihPgH1 = accounts[1]
		const uintZ6L76kF = await PACTtb0mO88.allowance.call(addressEFMtvuB, addressP5upKFt, {from: accounts[4]});
		const uintjxASjWu = await PACTtb0mO88.allowance.call(addressuvt7nNt, address26NAPz, {from: accounts[3]});
		const stringAVnJCP9 = await PACTtb0mO88.name.call({from: accounts[0]});
		const boolwyfVv1q = await PACTtb0mO88.transfer.call(addressihPgH1, uintXmz9S7n, {from: accounts[5]});

		assert.equal(stringAVnJCP9, "P2PB2B community token")
		assert.equal(uintZ6L76kF, BigInt("0"))
		assert.equal(uintjxASjWu, BigInt("0"))
		await expect(PACTtb0mO88.transfer.call(addressihPgH1, uintXmz9S7n, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTi3Kd6N8 = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqM9S1NP = BigInt("1939")
		const addressLpskrYg = accounts[4]
		const addressBBboah3 = accounts[4]
		const addresspRHBS1O = accounts[0]
		const stringucZHCbH = await PACTi3Kd6N8.name.call({from: accounts[3]});
		const stringmuXxVg = await PACTi3Kd6N8.name.call({from: accounts[1]});
		const boolmuiZfyQ = await PACTi3Kd6N8.approve.call(addressLpskrYg, uintqM9S1NP, {from: accounts[3]});
		const uintzqLK4ww = await PACTi3Kd6N8.balanceOf.call(addressBBboah3, {from: accounts[1]});
		const boolF2PndCx = await PACTi3Kd6N8.setupFarming.call(addresspRHBS1O, {from: accounts[1]});
	});

	it('test for PACT', async () => {
		const PACTteG7Lc4 = await PACT.new({from: accounts[0]});
		const addressEZQjnv1 = accounts[0]
		const addressdCxnHSd = accounts[1]
		const addresspMmbDdV = accounts[5]
		const addressTni2KVF = accounts[2]
		const addresswohjjan = accounts[3]
		const bool0kgBkM = await PACTteG7Lc4.setupRewards.call(addressEZQjnv1, {from: accounts[2]});
		const boolbxyHpDl = await PACTteG7Lc4.setupReserve.call(addressdCxnHSd, {from: accounts[2]});
		const uintkXkzWid = await PACTteG7Lc4.allowance.call(addressTni2KVF, addresspMmbDdV, {from: accounts[4]});
		const boollGdEVyb = await PACTteG7Lc4.setupRewards.call(addresswohjjan, {from: accounts[0]});

		await expect(PACTteG7Lc4.setupRewards.call(addressEZQjnv1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTnJ8dmxR = await PACT.new({from: accounts[3]});
		const addressHpwI85 = accounts[0]
		const addressXEgEIAC = accounts[6]
		const uintsjb4lHM = await PACTnJ8dmxR.balanceOf.call(addressHpwI85, {from: accounts[5]});
		const uintbcjpcC = await PACTnJ8dmxR.totalSupply.call({from: accounts[3]});
		const boolLNYb5vI = await PACTnJ8dmxR.setupBasePool.call(addressXEgEIAC, {from: accounts[2]});

		assert.equal(uintbcjpcC, BigInt("1000000000000000000000000000"))
		assert.equal(uintsjb4lHM, BigInt("0"))
		await expect(PACTnJ8dmxR.setupBasePool.call(addressXEgEIAC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTu72n9u = await PACT.new({from: accounts[2]});
		const addressfmWslNL = accounts[3]
		const uintsiwCPGb = BigInt("1021")
		const addressmQzD85g = accounts[2]
		const addressGQQH75o = accounts[4]
		const address7j2tq5 = accounts[4]
		const addresshdpskL7 = accounts[0]
		const uintKEBPqcC = BigInt("1284")
		const addressKAf6zVw = accounts[3]
		const boolbuwGEQu = await PACTu72n9u.setupFarming.call(addressfmWslNL, {from: accounts[0]});
		const boolLg6V2v0 = await PACTu72n9u.approve.call(addressmQzD85g, uintsiwCPGb, {from: accounts[3]});
		const boolmBsLIWq = await PACTu72n9u.setupBasePool.call(addressGQQH75o, {from: accounts[1]});
		const uinti8mUAOH = await PACTu72n9u.allowance.call(addresshdpskL7, address7j2tq5, {from: accounts[4]});
		const boolwh5SGZS = await PACTu72n9u.burn.call(addressKAf6zVw, uintKEBPqcC, {from: accounts[3]});

		await expect(PACTu72n9u.setupFarming.call(addressfmWslNL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTnJ8dmxR = await PACT.new({from: accounts[3]});
		const uintQG796P6 = BigInt("706")
		const addressf5F9Rsb = accounts[3]
		const addressDBnInAo = accounts[2]
		const addressWYqeOrv = accounts[1]
		const addresso3d0gc = "0x0000000000000000000000000000000000000001"
		const addresskQ5PhmZ = accounts[0]
		const addressVniGaQC = accounts[5]
		const boolS1hWVQF = await PACTnJ8dmxR.approve.call(addressf5F9Rsb, uintQG796P6, {from: accounts[1]});
		const boolffXySB1 = await PACTnJ8dmxR.setupRewards.call(addressDBnInAo, {from: accounts[2]});
		const uintsjb4lHM = await PACTnJ8dmxR.balanceOf.call(addressWYqeOrv, {from: accounts[5]});
		const boolt6WkPNo = await PACTnJ8dmxR.setupRewards.call(addresso3d0gc, {from: accounts[4]});
		const uintSbgRafP = await PACTnJ8dmxR.allowance.call(addressVniGaQC, addresskQ5PhmZ, {from: accounts[0]});

		assert.equal(boolS1hWVQF, true)
		await expect(PACTnJ8dmxR.setupRewards.call(addressDBnInAo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTnJ8dmxR = await PACT.new({from: accounts[3]});
		const addresszGicyc0 = accounts[0]
		const addressDScynyU = accounts[8]
		const boolGkVxKF = await PACTnJ8dmxR.setupReserve.call(addresszGicyc0, {from: "0x0000000000000000000000000000000000000001"});
		const boolLNYb5vI = await PACTnJ8dmxR.setupBasePool.call(addressDScynyU, {from: accounts[2]});
		const uint8sCUxi1X = await PACTnJ8dmxR.decimals.call({from: accounts[3]});

		await expect(PACTnJ8dmxR.setupReserve.call(addresszGicyc0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTnJ8dmxR = await PACT.new({from: accounts[3]});
		const addressCeyA3br = accounts[2]
		const addressD22dOR1 = accounts[8]
		const uintMk40oJ5 = await PACTnJ8dmxR.balanceOf.call(addressCeyA3br, {from: accounts[0]});
		const stringO45KIU9 = await PACTnJ8dmxR.symbol.call({from: accounts[5]});
		const boolLNYb5vI = await PACTnJ8dmxR.setupBasePool.call(addressD22dOR1, {from: accounts[2]});

		assert.equal(stringO45KIU9, "PACT")
		assert.equal(uintMk40oJ5, BigInt("0"))
		await expect(PACTnJ8dmxR.setupBasePool.call(addressD22dOR1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})