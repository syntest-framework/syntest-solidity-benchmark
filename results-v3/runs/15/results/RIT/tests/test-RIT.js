const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITBfe6k4m = await RIT.new({from: accounts[4]});
		const addressz7haPCv = accounts[3]
		const uint8uZacKeO = await RITBfe6k4m.decimals.call({from: accounts[2]});
		const stringzYiYyHY = await RITBfe6k4m.symbol.call({from: accounts[2]});
		const uint256CqhPu6 = await RITBfe6k4m.balanceOf.call(addressz7haPCv, {from: accounts[4]});
		const uint8nCFZqEp = await RITBfe6k4m.decimals.call({from: accounts[4]});
		const uint256tTeYFdY = await RITBfe6k4m.totalSupply.call({from: accounts[0]});

		assert.equal(stringzYiYyHY, "RIT 2.0")
		assert.equal(uint256CqhPu6, BigInt("0"))
		assert.equal(uint256tTeYFdY, BigInt("500000000000000000000000000"))
		assert.equal(uint8nCFZqEp, BigInt("18"))
		assert.equal(uint8uZacKeO, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITIJCIj4u = await RIT.new({from: accounts[5]});
		const uintQIXnPPR = BigInt("1695")
		const addressC0Kmj92 = accounts[0]
		const addressKyIKWua = accounts[3]
		const addressDip8f8B = accounts[5]
		const addressd26fEfy = accounts[3]
		const addressGbXNK9r = accounts[1]
		const boolxCnGdW = await RITIJCIj4u.approve.call(addressC0Kmj92, uintQIXnPPR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256zmzHmFS = await RITIJCIj4u.balanceOf.call(addressKyIKWua, {from: "0x0000000000000000000000000000000000000001"});
		const uint8TC3gqhR = await RITIJCIj4u.decimals.call({from: accounts[3]});
		const uint256iWPpnPI = await RITIJCIj4u.allowance.call(addressd26fEfy, addressDip8f8B, {from: accounts[0]});
		const uint256RW7GFY8 = await RITIJCIj4u.balanceOf.call(addressGbXNK9r, {from: accounts[1]});

		assert.equal(boolxCnGdW, true)
		assert.equal(uint256RW7GFY8, BigInt("0"))
		assert.equal(uint256iWPpnPI, BigInt("0"))
		assert.equal(uint256zmzHmFS, BigInt("0"))
		assert.equal(uint8TC3gqhR, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITkelxOe9 = await RIT.new({from: accounts[4]});
		const uintbYxP0Ny = BigInt("1441")
		const addressszzzL3k = accounts[3]
		const uintw3bMrP = BigInt("322")
		const addressRjYDeTv = accounts[2]
		const uintOyOwzt = BigInt("1740")
		const addressiTkrzZt = accounts[3]
		const addressfNlyu34 = accounts[1]
		const uintkE5zzee = BigInt("1478")
		const addressYtJqcQW = accounts[1]
		const addressgozFa4e = accounts[4]
		const uinthgOSdhn = BigInt("586")
		const addresskQn80Lg = accounts[1]
		const boolwiEGRHg = await RITkelxOe9.approve.call(addressszzzL3k, uintbYxP0Ny, {from: accounts[1]});
		const boolPZk3rHd = await RITkelxOe9.approve.call(addressRjYDeTv, uintw3bMrP, {from: accounts[3]});
		const boolSeouL7q = await RITkelxOe9.transferFrom.call(addressfNlyu34, addressiTkrzZt, uintOyOwzt, {from: accounts[0]});
		const boolaMc8Vhn = await RITkelxOe9.transferFrom.call(addressgozFa4e, addressYtJqcQW, uintkE5zzee, {from: accounts[4]});
		const boolUwEllev = await RITkelxOe9.increaseAllowance.call(addresskQn80Lg, uinthgOSdhn, {from: accounts[3]});

		assert.equal(boolPZk3rHd, true)
		assert.equal(boolwiEGRHg, true)
		await expect(RITkelxOe9.transferFrom.call(addressfNlyu34, addressiTkrzZt, uintOyOwzt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITZm7ILTl = await RIT.new({from: accounts[2]});
		const uintnBJWKN9 = BigInt("956")
		const addresssxx9u6q = accounts[0]
		const addressOjKap3u = accounts[0]
		const boolNtM4pix = await RITZm7ILTl.transfer.call(addresssxx9u6q, uintnBJWKN9, {from: accounts[0]});
		const uint256X4EhY32 = await RITZm7ILTl.balanceOf.call(addressOjKap3u, {from: accounts[1]});

		await expect(RITZm7ILTl.transfer.call(addresssxx9u6q, uintnBJWKN9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITSj0L6N = await RIT.new({from: accounts[1]});
		const addressCO6a2vt = accounts[3]
		const addressFPfx8T = "0x0000000000000000000000000000000000000001"
		const uintEijmJxl = BigInt("1952")
		const addressEguUXHw = "0x0000000000000000000000000000000000000001"
		const uintN329n2x = BigInt("299")
		const addressUZsC9td = "0x0000000000000000000000000000000000000001"
		const uintfwDGZAw = BigInt("1975")
		const addressiZHWHXx = accounts[1]
		const uint256Tskc1OX = await RITSj0L6N.allowance.call(addressFPfx8T, addressCO6a2vt, {from: accounts[1]});
		const booly7RrBpT = await RITSj0L6N.increaseAllowance.call(addressEguUXHw, uintEijmJxl, {from: accounts[5]});
		const boolnEzgbsM = await RITSj0L6N.transfer.call(addressUZsC9td, uintN329n2x, {from: accounts[1]});
		const boolPXiy2kI = await RITSj0L6N.increaseAllowance.call(addressiZHWHXx, uintfwDGZAw, {from: accounts[4]});
		const stringIKaI8BT = await RITSj0L6N.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booly7RrBpT, true)
		assert.equal(uint256Tskc1OX, BigInt("0"))
		await expect(RITSj0L6N.transfer.call(addressUZsC9td, uintN329n2x, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITIJCIj4u = await RIT.new({from: accounts[5]});
		const uintln2Gt3H = BigInt("1695")
		const addressnlf67Px = accounts[0]
		const addressNMPxV5j = accounts[3]
		const uinteRxDSOp = BigInt("54")
		const addressyNNlbli = accounts[5]
		const addressM2fO90Q = accounts[3]
		const addressxzzwgCi = accounts[1]
		const boolxCnGdW = await RITIJCIj4u.approve.call(addressnlf67Px, uintln2Gt3H, {from: "0x0000000000000000000000000000000000000001"});
		const uint256zmzHmFS = await RITIJCIj4u.balanceOf.call(addressNMPxV5j, {from: "0x0000000000000000000000000000000000000001"});
		const uint8TC3gqhR = await RITIJCIj4u.decimals.call({from: accounts[3]});
		const uint256hvxjZZ4 = await RITIJCIj4u._burn.call(uinteRxDSOp, {from: accounts[5]});
		const uint256iWPpnPI = await RITIJCIj4u.allowance.call(addressM2fO90Q, addressyNNlbli, {from: accounts[0]});
		const uint256RW7GFY8 = await RITIJCIj4u.balanceOf.call(addressxzzwgCi, {from: accounts[1]});

		assert.equal(boolxCnGdW, true)
		assert.equal(uint256zmzHmFS, BigInt("0"))
		assert.equal(uint8TC3gqhR, BigInt("18"))
		await expect(RITIJCIj4u._burn.call(uinteRxDSOp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITSj0L6N = await RIT.new({from: accounts[1]});
		const addressOtTJct4 = accounts[3]
		const addressx4kw4r4 = "0x0000000000000000000000000000000000000001"
		const uintfyEDHu9 = BigInt("1952")
		const addressbEheGyf = "0x0000000000000000000000000000000000000001"
		const uintuFKitTl = BigInt("299")
		const addressGWlyQmU = "0x0000000000000000000000000000000000000001"
		const uintpyi36xO = BigInt("1975")
		const addressVVOqyvO = accounts[1]
		const addressOCebuwG = "0x0000000000000000000000000000000000000001"
		const addresseam74AZ = accounts[2]
		const uint256Tskc1OX = await RITSj0L6N.allowance.call(addressx4kw4r4, addressOtTJct4, {from: accounts[1]});
		const stringqMndLgR = await RITSj0L6N.name.call({from: accounts[4]});
		const booly7RrBpT = await RITSj0L6N.increaseAllowance.call(addressbEheGyf, uintfyEDHu9, {from: accounts[5]});
		const boolnEzgbsM = await RITSj0L6N.transfer.call(addressGWlyQmU, uintuFKitTl, {from: accounts[1]});
		const boolPXiy2kI = await RITSj0L6N.increaseAllowance.call(addressVVOqyvO, uintpyi36xO, {from: accounts[4]});
		const stringIKaI8BT = await RITSj0L6N.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256wtsHrUN = await RITSj0L6N.allowance.call(addresseam74AZ, addressOCebuwG, {from: accounts[4]});

		assert.equal(booly7RrBpT, true)
		assert.equal(stringqMndLgR, "Real Estate Investment Token")
		assert.equal(uint256Tskc1OX, BigInt("0"))
		await expect(RITSj0L6N.transfer.call(addressGWlyQmU, uintuFKitTl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITVh8xQoM = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxTxE4T = BigInt("583")
		const addressa1sHmec = accounts[0]
		const addressDQBlRgW = accounts[4]
		const uintuKP6PyX = BigInt("895")
		const addresstXrRpbq = accounts[3]
		const uint8lc1gswJ = await RITVh8xQoM.decimals.call({from: accounts[3]});
		const boolYGX5Man = await RITVh8xQoM.decreaseAllowance.call(addressa1sHmec, uintxTxE4T, {from: accounts[0]});
		const uint256LsWnDyl = await RITVh8xQoM.balanceOf.call(addressDQBlRgW, {from: accounts[1]});
		const uint256QWPJGbF = await RITVh8xQoM.totalSupply.call({from: accounts[1]});
		const booliiVCWxV = await RITVh8xQoM.transfer.call(addresstXrRpbq, uintuKP6PyX, {from: accounts[5]});
	});

	it('test for RIT', async () => {
		const RITSj0L6N = await RIT.new({from: accounts[1]});
		const addressa0rUFOd = accounts[3]
		const addresskULNBix = "0x0000000000000000000000000000000000000001"
		const uintktcnd0j = BigInt("1952")
		const addresschKEUoQ = "0x0000000000000000000000000000000000000001"
		const uintK4K4V3W = BigInt("429")
		const addressFkekWHZ = accounts[0]
		const uintWhlzEJQ = BigInt("299")
		const addresstASvBCQ = "0x0000000000000000000000000000000000000001"
		const uintqxXLATS = BigInt("1975")
		const addressoewHWNj = accounts[1]
		const uint256Tskc1OX = await RITSj0L6N.allowance.call(addresskULNBix, addressa0rUFOd, {from: accounts[1]});
		const booly7RrBpT = await RITSj0L6N.increaseAllowance.call(addresschKEUoQ, uintktcnd0j, {from: accounts[5]});
		const boolyQFe1FO = await RITSj0L6N.decreaseAllowance.call(addressFkekWHZ, uintK4K4V3W, {from: "0x0000000000000000000000000000000000000001"});
		const boolnEzgbsM = await RITSj0L6N.transfer.call(addresstASvBCQ, uintWhlzEJQ, {from: accounts[1]});
		const boolPXiy2kI = await RITSj0L6N.increaseAllowance.call(addressoewHWNj, uintqxXLATS, {from: accounts[4]});
		const stringIKaI8BT = await RITSj0L6N.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booly7RrBpT, true)
		assert.equal(uint256Tskc1OX, BigInt("0"))
		await expect(RITSj0L6N.decreaseAllowance.call(addressFkekWHZ, uintK4K4V3W, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITSj0L6N = await RIT.new({from: accounts[1]});
		const addressDxY7gBI = accounts[3]
		const addressRkGLOTq = "0x0000000000000000000000000000000000000001"
		const uintC6KHEd4 = BigInt("1952")
		const addresswFOLYtg = "0x0000000000000000000000000000000000000000"
		const uintLMYOz8P = BigInt("299")
		const addressdIbbJHV = "0x0000000000000000000000000000000000000001"
		const uintv2ycyqG = BigInt("1975")
		const addressQ4JmaYL = accounts[1]
		const uint256Tskc1OX = await RITSj0L6N.allowance.call(addressRkGLOTq, addressDxY7gBI, {from: accounts[1]});
		const booly7RrBpT = await RITSj0L6N.increaseAllowance.call(addresswFOLYtg, uintC6KHEd4, {from: accounts[5]});
		const boolnEzgbsM = await RITSj0L6N.transfer.call(addressdIbbJHV, uintLMYOz8P, {from: accounts[1]});
		const boolPXiy2kI = await RITSj0L6N.increaseAllowance.call(addressQ4JmaYL, uintv2ycyqG, {from: accounts[4]});
		const stringIKaI8BT = await RITSj0L6N.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Tskc1OX, BigInt("0"))
		await expect(RITSj0L6N.increaseAllowance.call(addresswFOLYtg, uintC6KHEd4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITSj0L6N = await RIT.new({from: accounts[1]});
		const addressLmqanGh = accounts[3]
		const addressxuYAi7H = "0x0000000000000000000000000000000000000001"
		const uintp6ZqP8r = BigInt("299")
		const addressC3sDNU = "0x0000000000000000000000000000000000000000"
		const uintT1R63pT = BigInt("1975")
		const addressN7ErsIK = accounts[1]
		const uint256Tskc1OX = await RITSj0L6N.allowance.call(addressxuYAi7H, addressLmqanGh, {from: accounts[1]});
		const boolnEzgbsM = await RITSj0L6N.transfer.call(addressC3sDNU, uintp6ZqP8r, {from: accounts[1]});
		const boolPXiy2kI = await RITSj0L6N.increaseAllowance.call(addressN7ErsIK, uintT1R63pT, {from: accounts[4]});
		const stringIKaI8BT = await RITSj0L6N.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Tskc1OX, BigInt("0"))
		await expect(RITSj0L6N.transfer.call(addressC3sDNU, uintp6ZqP8r, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})