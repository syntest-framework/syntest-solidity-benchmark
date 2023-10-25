const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressbJqp261 = accounts[0]
		const addressIZSMhTe = "0x0000000000000000000000000000000000000001"
		const QuickTokenQHSFvS = await QuickToken.new(addressbJqp261, addressIZSMhTe, {from: accounts[3]});
		const uintN8krbJh = BigInt("769")
		const addressJF2tAgl = accounts[3]
		const addressdGhekY = accounts[0]
		const addressATFXToD = accounts[3]
		const boolDrhKYDY = await QuickTokenQHSFvS.approve.call(addressJF2tAgl, uintN8krbJh, {from: accounts[0]});
		const uintRdJZCnW = await QuickTokenQHSFvS.allowance.call(addressATFXToD, addressdGhekY, {from: accounts[3]});

		assert.equal(boolDrhKYDY, true)
		assert.equal(uintRdJZCnW, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressaOBuH9S = accounts[5]
		const addressaFe4nw = accounts[1]
		const QuickTokenBaCnSvP = await QuickToken.new(addressaOBuH9S, addressaFe4nw, {from: accounts[5]});
		const uintVh1HcN = BigInt("1788")
		const addressQErSTn7 = accounts[0]
		const addressLCAc9W6 = accounts[2]
		const uintYqQNUwx = BigInt("1238")
		const addressEENB8yv = accounts[0]
		const uintGVWnJsT = BigInt("415")
		const addressEbT3X7J = accounts[2]
//		const boolpXCeo96 = await QuickTokenBaCnSvP.transferFrom.call(addressLCAc9W6, addressQErSTn7, uintVh1HcN, {from: accounts[2]});
//		const addresslELbUvD = await QuickTokenBaCnSvP.mint.call(addressEENB8yv, uintYqQNUwx, {from: accounts[2]});
//		const addressjp6Kiy = await QuickTokenBaCnSvP.mint.call(addressEbT3X7J, uintGVWnJsT, {from: accounts[4]});

		await expect(QuickTokenBaCnSvP.transferFrom.call(addressLCAc9W6, addressQErSTn7, uintVh1HcN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressExbU3S = accounts[2]
		const addressbxnv6mM = accounts[1]
		const QuickTokenlGBpDgR = await QuickToken.new(addressExbU3S, addressbxnv6mM, {from: accounts[4]});
		const uintQoc58bS = BigInt("1792")
		const addresssStxjEt = accounts[0]
		const uintk7qL1nw = BigInt("1546")
		const addressEYi2CXE = accounts[3]
		const uintwfYgMfI = BigInt("85")
		const addressh24R2u = accounts[3]
//		const addressnPwAgtG = await QuickTokenlGBpDgR.mint.call(addresssStxjEt, uintQoc58bS, {from: accounts[0]});
//		const boolUHW1Mbv = await QuickTokenlGBpDgR.approve.call(addressEYi2CXE, uintk7qL1nw, {from: accounts[0]});
//		const addressXSQ7PgA = await QuickTokenlGBpDgR.mint.call(addressh24R2u, uintwfYgMfI, {from: accounts[0]});

		await expect(QuickTokenlGBpDgR.mint.call(addresssStxjEt, uintQoc58bS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressToPM735 = accounts[5]
		const addressFxvu0Ft = accounts[3]
		const QuickTokenMKQLGQd = await QuickToken.new(addressToPM735, addressFxvu0Ft, {from: "0x0000000000000000000000000000000000000001"});
		const uintb6ZsFiM = BigInt("565")
		const addressnP0bWUR = accounts[4]
		const uintC9Liah = BigInt("125")
		const addressvjyA8hI = accounts[4]
		const addresshdXJZJ = await QuickTokenMKQLGQd.mint.call(addressnP0bWUR, uintb6ZsFiM, {from: accounts[1]});
		const addresszwFD2mg = await QuickTokenMKQLGQd.mint.call(addressvjyA8hI, uintC9Liah, {from: accounts[3]});
	});

	it('test for QuickToken', async () => {
		const addressZlMCudk = accounts[3]
		const addressO8udJUD = accounts[1]
		const QuickTokenpUVW3AX = await QuickToken.new(addressZlMCudk, addressO8udJUD, {from: accounts[4]});
		const addressBrFZRoB = accounts[3]
		const addresszp9VMMz = accounts[3]
		const uintPUW8hOh = BigInt("95")
		const addressO9FnMP = "0x0000000000000000000000000000000000000001"
		const uintmE6eTa2 = BigInt("664")
		const addressgyYNhOT = accounts[0]
		const addressSZYA2dr = accounts[0]
		const uintWntGH6O = BigInt("1009")
		const addressWQkgLqR = accounts[4]
		const addressXobL3rd = accounts[0]
		const uintdbXCOUk = await QuickTokenpUVW3AX.allowance.call(addresszp9VMMz, addressBrFZRoB, {from: accounts[0]});
//		const booloaJmrzT = await QuickTokenpUVW3AX.transfer.call(addressO9FnMP, uintPUW8hOh, {from: accounts[0]});
//		const addressX3Le3el = await QuickTokenpUVW3AX.mint.call(addressgyYNhOT, uintmE6eTa2, {from: accounts[0]});
//		const uintWcJfbT3 = await QuickTokenpUVW3AX.balanceOf.call(addressSZYA2dr, {from: "0x0000000000000000000000000000000000000001"});
//		const boolvCUqqb = await QuickTokenpUVW3AX.transferFrom.call(addressXobL3rd, addressWQkgLqR, uintWntGH6O, {from: accounts[5]});

		assert.equal(uintdbXCOUk, BigInt("0"))
		await expect(QuickTokenpUVW3AX.transfer.call(addressO9FnMP, uintPUW8hOh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressmyDwj8x = accounts[5]
		const addressxX3Cfro = accounts[1]
		const QuickTokenKGZpxjp = await QuickToken.new(addressmyDwj8x, addressxX3Cfro, {from: accounts[4]});
		const uintdcVVKF = BigInt("961")
		const addressWwcyV6Z = accounts[1]
		const addressrtqt6h2 = accounts[4]
		const uintpjqImYE = BigInt("309")
		const addresswXwDZ1m = accounts[3]
		const addressaWgajeL = "0x0000000000000000000000000000000000000001"
		const addressdnBwNpA = accounts[0]
//		const boolQwmumLT = await QuickTokenKGZpxjp.transferFrom.call(addressrtqt6h2, addressWwcyV6Z, uintdcVVKF, {from: accounts[0]});
//		const boolTN6vC5s = await QuickTokenKGZpxjp.approve.call(addresswXwDZ1m, uintpjqImYE, {from: accounts[3]});
//		const uintkFwEO3K = await QuickTokenKGZpxjp.allowance.call(addressdnBwNpA, addressaWgajeL, {from: accounts[0]});

		await expect(QuickTokenKGZpxjp.transferFrom.call(addressrtqt6h2, addressWwcyV6Z, uintdcVVKF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressTZGbWDG = accounts[5]
		const addressWIm7ROK = "0x0000000000000000000000000000000000000001"
		const QuickTokenAdYezYg = await QuickToken.new(addressTZGbWDG, addressWIm7ROK, {from: accounts[1]});
		const addressbiqtKOk = accounts[4]
		const addresskhbR0vs = accounts[1]
		const addressU9Aq2x = accounts[4]
		const addresstu52Cx = accounts[0]
		const uintB2L0mZo = await QuickTokenAdYezYg.balanceOf.call(addressbiqtKOk, {from: accounts[0]});
		const uintdcHVGw = await QuickTokenAdYezYg.allowance.call(addressU9Aq2x, addresskhbR0vs, {from: accounts[0]});
//		const addressxaFdf95 = await QuickTokenAdYezYg.setMinter.call(addresstu52Cx, {from: accounts[3]});

		assert.equal(uintB2L0mZo, BigInt("0"))
		assert.equal(uintdcHVGw, BigInt("0"))
		await expect(QuickTokenAdYezYg.setMinter.call(addresstu52Cx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressZZyv2j = accounts[5]
		const addressyZuqYC = accounts[1]
		const QuickTokengcLdtgU = await QuickToken.new(addressZZyv2j, addressyZuqYC, {from: accounts[0]});
		const uinth2g4wlW = BigInt("1454")
		const addressViaErL9 = accounts[4]
		const uintPVfm9J = BigInt("1676")
		const addressFj7J4VL = accounts[1]
		const uintE3MUwlt = BigInt("1520")
		const addresszkjRyRB = "0x0000000000000000000000000000000000000001"
		const addressznEc2PZ = accounts[2]
		const addressvhkUBC = accounts[2]
		const uintxBRldBS = BigInt("1743")
		const addressSeSnq0u = "0x0000000000000000000000000000000000000001"
		const uintDtz5De = BigInt("107")
		const addressRxRNSzx = accounts[2]
		const boolAUcNel1 = await QuickTokengcLdtgU.approve.call(addressViaErL9, uinth2g4wlW, {from: accounts[2]});
		const addressN7HSWTD = await QuickTokengcLdtgU.mint.call(addressFj7J4VL, uintPVfm9J, {from: accounts[1]});
		const boolotzs8Tq = await QuickTokengcLdtgU.transfer.call(addresszkjRyRB, uintE3MUwlt, {from: accounts[5]});
		const uintbwLVUF8 = await QuickTokengcLdtgU.allowance.call(addressvhkUBC, addressznEc2PZ, {from: accounts[2]});
		const addressT3N2toz = await QuickTokengcLdtgU.mint.call(addressSeSnq0u, uintxBRldBS, {from: accounts[1]});
//		const addressWgDfnzH = await QuickTokengcLdtgU.mint.call(addressRxRNSzx, uintDtz5De, {from: accounts[4]});

		assert.equal(boolAUcNel1, true)
		assert.equal(boolotzs8Tq, true)
		assert.equal(uintbwLVUF8, BigInt("0"))
		await expect(QuickTokengcLdtgU.mint.call(addressRxRNSzx, uintDtz5De, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})