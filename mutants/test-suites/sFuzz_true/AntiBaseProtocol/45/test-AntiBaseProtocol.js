const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringsCBZuVJ = "sayTRHIQkOie8eSW9diZNlhEmgAoxcWTYtEeKkMgrTaIpuIFPCcEeMyRCBS9L"
		const stringuRqRb3Y = "RLKhoUlF4Dk4m65CKIQADN3sAhIeBDX9UdjLddXKOaa6Lr8yFc"
		const uintjbssgX4 = BigInt("47")
		const AntiBaseProtocolFximQG6 = await AntiBaseProtocol.new(stringsCBZuVJ, stringuRqRb3Y, uintjbssgX4, {from: accounts[2]});
		const uintlYfhBnm = BigInt("1636")
		const addressQrqKL35 = accounts[2]
		const addressQ1uOjks = accounts[0]
		const addresstj5ZAst = "0x0000000000000000000000000000000000000001"
		const uintgZECZsD = BigInt("812")
		const addressLzQ5T9Y = accounts[4]
		const uintyWQxOer = BigInt("893")
		const boolcSAdtEE = await AntiBaseProtocolFximQG6.increaseAllowance.call(addressQrqKL35, uintlYfhBnm, {from: accounts[0]});
		const uint256Tj7fqnw = await AntiBaseProtocolFximQG6.allowance.call(addresstj5ZAst, addressQ1uOjks, {from: accounts[2]});
		const boolWzcmT9x = await AntiBaseProtocolFximQG6.transfer.call(addressLzQ5T9Y, uintgZECZsD, {from: accounts[5]});
		const uint256r15Dq77 = await AntiBaseProtocolFximQG6.findBurnFee.call(uintyWQxOer, {from: accounts[5]});
		await AntiBaseProtocolFximQG6.requestGas.call({from: accounts[3]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2TZJT0 = await AntiBaseProtocol.new({from: accounts[4]});
		const uintZs7Sxa8 = BigInt("395")
		const addresssOGT8Q6 = accounts[3]
		const addressGjrDrc1 = accounts[3]
		const addressfUErhU = accounts[2]
		const addressagtSQoy = accounts[3]
//		const addressU5l7ZPD = await AntiBaseProtocol2TZJT0._mint.call(addresssOGT8Q6, uintZs7Sxa8, {from: accounts[0]});
//		const uint256Kz0vqml = await AntiBaseProtocol2TZJT0.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressDhNZ2u = await AntiBaseProtocol2TZJT0._transferOwnership.call(addressGjrDrc1, {from: accounts[4]});
//		const uint256Vkzcxed = await AntiBaseProtocol2TZJT0.allowance.call(addressagtSQoy, addressfUErhU, {from: accounts[1]});
//		await AntiBaseProtocol2TZJT0.onlyOwner.call({from: accounts[4]});

		await expect(AntiBaseProtocol2TZJT0._mint.call(addresssOGT8Q6, uintZs7Sxa8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const addressCnrsZlh = accounts[0]
		const uintNjr1Ugx = BigInt("1738")
		const uintpJC6h9 = BigInt("1446")
		const addressHU8q84h = accounts[3]
		const uintINepJIX = BigInt("1511")
		const addresslBU0Dqu = accounts[5]
		const addressvhaFLdH = await AntiBaseProtocolRoXEdtX.transferOwnership.call(addressCnrsZlh, {from: accounts[2]});
		const uint256lXelLrZ = await AntiBaseProtocolRoXEdtX.findRewardFee.call(uintNjr1Ugx, {from: accounts[5]});
//		const addressBlWFta2 = await AntiBaseProtocolRoXEdtX._burn.call(addressHU8q84h, uintpJC6h9, {from: accounts[1]});
//		const addressi27568N = await AntiBaseProtocolRoXEdtX._burn.call(addresslBU0Dqu, uintINepJIX, {from: accounts[3]});

		assert.equal(uint256lXelLrZ, BigInt("90"))
		await expect(AntiBaseProtocolRoXEdtX._burn.call(addressHU8q84h, uintpJC6h9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const addressiqluCkp = accounts[0]
		const uintQGz3XS = BigInt("1738")
		const uintufVFYy = BigInt("1446")
		const address1AbE2d = accounts[3]
		const uintRy3hyKe = BigInt("1511")
		const addressg7NEXWW = accounts[5]
		const addressvhaFLdH = await AntiBaseProtocolRoXEdtX.transferOwnership.call(addressiqluCkp, {from: accounts[2]});
		const uint8QlMVWtk = await AntiBaseProtocolRoXEdtX.decimals.call({from: accounts[3]});
		const uint256lXelLrZ = await AntiBaseProtocolRoXEdtX.findRewardFee.call(uintQGz3XS, {from: accounts[5]});
//		const addressBlWFta2 = await AntiBaseProtocolRoXEdtX._burn.call(address1AbE2d, uintufVFYy, {from: accounts[1]});
//		const addressi27568N = await AntiBaseProtocolRoXEdtX._burn.call(addressg7NEXWW, uintRy3hyKe, {from: accounts[3]});

		assert.equal(uint256lXelLrZ, BigInt("90"))
		assert.equal(uint8QlMVWtk, BigInt("18"))
		await expect(AntiBaseProtocolRoXEdtX._burn.call(address1AbE2d, uintufVFYy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const addressVJSoSLn = accounts[1]
		const uintg8PTIyp = BigInt("1738")
		const uintF8BsZSB = BigInt("912")
		const uintY8PY7Rf = BigInt("1446")
		const addressUG5sZNs = accounts[3]
		const uintozpiAUm = BigInt("1511")
		const addressL12rKQ8 = accounts[5]
		const addressvhaFLdH = await AntiBaseProtocolRoXEdtX.transferOwnership.call(addressVJSoSLn, {from: accounts[2]});
		const uint256lXelLrZ = await AntiBaseProtocolRoXEdtX.findRewardFee.call(uintg8PTIyp, {from: accounts[5]});
		const uint256scX0Mz = await AntiBaseProtocolRoXEdtX.findBurnFee.call(uintF8BsZSB, {from: accounts[2]});
//		const addressBlWFta2 = await AntiBaseProtocolRoXEdtX._burn.call(addressUG5sZNs, uintY8PY7Rf, {from: accounts[1]});
//		const addressi27568N = await AntiBaseProtocolRoXEdtX._burn.call(addressL12rKQ8, uintozpiAUm, {from: accounts[3]});

		assert.equal(uint256lXelLrZ, BigInt("90"))
		assert.equal(uint256scX0Mz, BigInt("150"))
		await expect(AntiBaseProtocolRoXEdtX._burn.call(addressUG5sZNs, uintY8PY7Rf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const addressPzd03wq = accounts[1]
		const uintMOokZb = BigInt("1738")
		const uintY5d3qsM = BigInt("1184")
		const addressDXvxh6V = accounts[4]
		const uintWyV3Mvr = BigInt("912")
		const uintEhInkY6 = BigInt("1446")
		const addressL1zz61V = accounts[4]
		const uintNRH4JmC = BigInt("1511")
		const addressmak5JWG = accounts[5]
		const addresseglNhEi = accounts[1]
		const addressvhaFLdH = await AntiBaseProtocolRoXEdtX.transferOwnership.call(addressPzd03wq, {from: accounts[2]});
		const uint256lXelLrZ = await AntiBaseProtocolRoXEdtX.findRewardFee.call(uintMOokZb, {from: accounts[5]});
//		const boolQqwuDU = await AntiBaseProtocolRoXEdtX.decreaseAllowance.call(addressDXvxh6V, uintY5d3qsM, {from: accounts[5]});
//		const uint256scX0Mz = await AntiBaseProtocolRoXEdtX.findBurnFee.call(uintWyV3Mvr, {from: accounts[2]});
//		const addressBlWFta2 = await AntiBaseProtocolRoXEdtX._burn.call(addressL1zz61V, uintEhInkY6, {from: accounts[1]});
//		const addressi27568N = await AntiBaseProtocolRoXEdtX._burn.call(addressmak5JWG, uintNRH4JmC, {from: accounts[3]});
//		const addressmm7gM1I = await AntiBaseProtocolRoXEdtX.transferOwnership.call(addresseglNhEi, {from: accounts[0]});

		assert.equal(uint256lXelLrZ, BigInt("90"))
		await expect(AntiBaseProtocolRoXEdtX.decreaseAllowance.call(addressDXvxh6V, uintY5d3qsM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const addressmJPWV77 = accounts[1]
		const uintsbxDuqu = BigInt("1738")
		const uintO5Vtts = BigInt("286")
		const addressM3lWpQ = accounts[2]
		const uintSSZyXb = BigInt("912")
		const uintkCgD1BP = BigInt("1446")
		const addresswHDsr0V = accounts[3]
		const uintob58ldm = BigInt("1511")
		const addressoT6LF2 = accounts[6]
		const addressvhaFLdH = await AntiBaseProtocolRoXEdtX.transferOwnership.call(addressmJPWV77, {from: accounts[2]});
		const uint256lXelLrZ = await AntiBaseProtocolRoXEdtX.findRewardFee.call(uintsbxDuqu, {from: accounts[5]});
		const boolhCHdB2L = await AntiBaseProtocolRoXEdtX.approve.call(addressM3lWpQ, uintO5Vtts, {from: accounts[1]});
		const uint256scX0Mz = await AntiBaseProtocolRoXEdtX.findBurnFee.call(uintSSZyXb, {from: accounts[2]});
//		const addressBlWFta2 = await AntiBaseProtocolRoXEdtX._burn.call(addresswHDsr0V, uintkCgD1BP, {from: accounts[1]});
//		const addressi27568N = await AntiBaseProtocolRoXEdtX._burn.call(addressoT6LF2, uintob58ldm, {from: accounts[3]});

		assert.equal(boolhCHdB2L, true)
		assert.equal(uint256lXelLrZ, BigInt("90"))
		assert.equal(uint256scX0Mz, BigInt("150"))
		await expect(AntiBaseProtocolRoXEdtX._burn.call(addresswHDsr0V, uintkCgD1BP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const addressxR1euz = accounts[1]
		const uintLBmtUKW = BigInt("1735")
		const uintIspxivP = BigInt("912")
		const uintbsOnSIx = BigInt("1231")
		const addressANS6MCK = accounts[1]
		const uintNcwT8xo = BigInt("1446")
		const addressEL01Zp = accounts[3]
		const uintENv0t0i = BigInt("1511")
		const addressDV7Qa7w = accounts[5]
		const addressvhaFLdH = await AntiBaseProtocolRoXEdtX.transferOwnership.call(addressxR1euz, {from: accounts[2]});
		const uint256lXelLrZ = await AntiBaseProtocolRoXEdtX.findRewardFee.call(uintLBmtUKW, {from: accounts[5]});
		const uint8RBCjnAl = await AntiBaseProtocolRoXEdtX.decimals.call({from: accounts[2]});
		const uint256scX0Mz = await AntiBaseProtocolRoXEdtX.findBurnFee.call(uintIspxivP, {from: accounts[2]});
		const boolyB4OSH = await AntiBaseProtocolRoXEdtX.increaseAllowance.call(addressANS6MCK, uintbsOnSIx, {from: accounts[0]});
//		const addressBlWFta2 = await AntiBaseProtocolRoXEdtX._burn.call(addressEL01Zp, uintNcwT8xo, {from: accounts[1]});
//		const addressi27568N = await AntiBaseProtocolRoXEdtX._burn.call(addressDV7Qa7w, uintENv0t0i, {from: accounts[3]});

		assert.equal(boolyB4OSH, true)
		assert.equal(uint256lXelLrZ, BigInt("90"))
		assert.equal(uint256scX0Mz, BigInt("150"))
		assert.equal(uint8RBCjnAl, BigInt("18"))
		await expect(AntiBaseProtocolRoXEdtX._burn.call(addressEL01Zp, uintNcwT8xo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const addressPEjidSR = accounts[0]
		const uintqYlyF6P = BigInt("1422")
		const addressvhaFLdH = await AntiBaseProtocolRoXEdtX.transferOwnership.call(addressPEjidSR, {from: accounts[2]});
		const uint256lXelLrZ = await AntiBaseProtocolRoXEdtX.findRewardFee.call(uintqYlyF6P, {from: accounts[5]});
		const uint256x5wgVsa = await AntiBaseProtocolRoXEdtX.totalSupply.call({from: accounts[3]});

		assert.equal(uint256lXelLrZ, BigInt("75"))
		assert.equal(uint256x5wgVsa, BigInt("31250000000000000000"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const addresstohECGz = accounts[0]
		const uintheMvBfP = BigInt("182")
		const uintLZb7Gdn = BigInt("755")
		const addressccRgZ0h = accounts[0]
		const addressLYHr2hv = "0x0000000000000000000000000000000000000001"
		const uintSUoYIQ9 = BigInt("1511")
		const addressc7n8ijJ = accounts[5]
		const uintx0cQF8d = BigInt("76")
		const addressQQYWjXX = "0x0000000000000000000000000000000000000001"
		const addressy2FbjXX = accounts[1]
		const addressvhaFLdH = await AntiBaseProtocolRoXEdtX.transferOwnership.call(addresstohECGz, {from: accounts[2]});
		const uint256lXelLrZ = await AntiBaseProtocolRoXEdtX.findRewardFee.call(uintheMvBfP, {from: accounts[5]});
//		const boolBfgkUa = await AntiBaseProtocolRoXEdtX.transferFrom.call(addressLYHr2hv, addressccRgZ0h, uintLZb7Gdn, {from: accounts[5]});
//		const addressi27568N = await AntiBaseProtocolRoXEdtX._burn.call(addressc7n8ijJ, uintSUoYIQ9, {from: accounts[3]});
//		const addressu6X5uzW = await AntiBaseProtocolRoXEdtX._approve.call(addressy2FbjXX, addressQQYWjXX, uintx0cQF8d, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256lXelLrZ, BigInt("10"))
		await expect(AntiBaseProtocolRoXEdtX.transferFrom.call(addressLYHr2hv, addressccRgZ0h, uintLZb7Gdn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const uintqfJxgoq = BigInt("1848")
		const addressZw7jy2t = accounts[3]
		const addressep6QBvf = accounts[0]
		const uintQ53C7zE = BigInt("1732")
//		const addressFi5Gn8g = await AntiBaseProtocolRoXEdtX.burnFrom.call(addressZw7jy2t, uintqfJxgoq, {from: accounts[1]});
//		const addressvhaFLdH = await AntiBaseProtocolRoXEdtX.transferOwnership.call(addressep6QBvf, {from: accounts[2]});
//		const uint256lXelLrZ = await AntiBaseProtocolRoXEdtX.findRewardFee.call(uintQ53C7zE, {from: accounts[5]});

		await expect(AntiBaseProtocolRoXEdtX.burnFrom.call(addressZw7jy2t, uintqfJxgoq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const addresse7Xg2dr = accounts[0]
		const uintjRxi82n = BigInt("162")
		const addressa4evnYr = "0x0000000000000000000000000000000000000001"
		const uint1kkT6T = BigInt("1276")
		const uintvm444le = BigInt("1511")
		const addressYHFUlbe = accounts[5]
		const addressvhaFLdH = await AntiBaseProtocolRoXEdtX.transferOwnership.call(addresse7Xg2dr, {from: accounts[2]});
		const uint256aYmexla = await AntiBaseProtocolRoXEdtX.findBurnFee.call(uintjRxi82n, {from: accounts[3]});
//		const addressChtbZm = await AntiBaseProtocolRoXEdtX.transferOwnership.call(addressa4evnYr, {from: accounts[0]});
//		const uint256lXelLrZ = await AntiBaseProtocolRoXEdtX.findRewardFee.call(uint1kkT6T, {from: accounts[5]});
//		const addressi27568N = await AntiBaseProtocolRoXEdtX._burn.call(addressYHFUlbe, uintvm444le, {from: accounts[3]});

		assert.equal(uint256aYmexla, BigInt("30"))
		await expect(AntiBaseProtocolRoXEdtX.transferOwnership.call(addressa4evnYr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const uintlq4h0NR = BigInt("1049")
		const addressrL1e5K = accounts[4]
		const addressf7t9clL = accounts[1]
		const uintlNMuZPO = BigInt("1738")
		const stringwcWCHdQ = await AntiBaseProtocolRoXEdtX.symbol.call({from: accounts[1]});
//		const addressrXAscxH = await AntiBaseProtocolRoXEdtX.burnFrom.call(addressrL1e5K, uintlq4h0NR, {from: accounts[3]});
//		const addressvhaFLdH = await AntiBaseProtocolRoXEdtX.transferOwnership.call(addressf7t9clL, {from: accounts[2]});
//		const uint256lXelLrZ = await AntiBaseProtocolRoXEdtX.findRewardFee.call(uintlNMuZPO, {from: accounts[5]});

		assert.equal(stringwcWCHdQ, "ABASE")
		await expect(AntiBaseProtocolRoXEdtX.burnFrom.call(addressrL1e5K, uintlq4h0NR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const addressCDrOG8 = accounts[0]
		const uintz0nTBjx = BigInt("182")
		const uintPv6hrcg = BigInt("1511")
		const addressABwDvTa = accounts[5]
//		await AntiBaseProtocolRoXEdtX.renounceOwnership.call({from: accounts[2]});
//		const addressvhaFLdH = await AntiBaseProtocolRoXEdtX.transferOwnership.call(addressCDrOG8, {from: accounts[2]});
//		const uint256lXelLrZ = await AntiBaseProtocolRoXEdtX.findRewardFee.call(uintz0nTBjx, {from: accounts[5]});
//		const addressi27568N = await AntiBaseProtocolRoXEdtX._burn.call(addressABwDvTa, uintPv6hrcg, {from: accounts[3]});

		await expect(AntiBaseProtocolRoXEdtX.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const addressPqtI0r2 = accounts[0]
		const addresspbiODNc = "0x0000000000000000000000000000000000000001"
		const addressN2UtPh = accounts[1]
		const uintTEftoYB = BigInt("147")
		const uintmTLfeQh = BigInt("1511")
		const addressRghlDJu = accounts[5]
		const uintMQl7KrE = BigInt("1785")
		const uintP74H21S = BigInt("76")
		const addressvQCozBa = "0x0000000000000000000000000000000000000001"
		const addressdzoUee = accounts[0]
		const addressvhaFLdH = await AntiBaseProtocolRoXEdtX.transferOwnership.call(addressPqtI0r2, {from: accounts[2]});
		const uint256T3DZFc3 = await AntiBaseProtocolRoXEdtX.totalSupply.call({from: accounts[4]});
		const uint256H08xBz = await AntiBaseProtocolRoXEdtX.allowance.call(addressN2UtPh, addresspbiODNc, {from: accounts[1]});
		const uint256lXelLrZ = await AntiBaseProtocolRoXEdtX.findRewardFee.call(uintTEftoYB, {from: accounts[5]});
		const addressbSPYEr = await AntiBaseProtocolRoXEdtX.owner.call({from: accounts[3]});
//		const addressi27568N = await AntiBaseProtocolRoXEdtX._burn.call(addressRghlDJu, uintmTLfeQh, {from: accounts[3]});
//		const uint256rf23jJ9 = await AntiBaseProtocolRoXEdtX.findBurnFee.call(uintMQl7KrE, {from: accounts[4]});
//		const addressu6X5uzW = await AntiBaseProtocolRoXEdtX._approve.call(addressdzoUee, addressvQCozBa, uintP74H21S, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressbSPYEr, 0x2C815DF52e0441C5F882dF7de6B7DCf8cEd607A3)
		assert.equal(uint256H08xBz, BigInt("0"))
		assert.equal(uint256T3DZFc3, BigInt("31250000000000000000"))
		assert.equal(uint256lXelLrZ, BigInt("10"))
		await expect(AntiBaseProtocolRoXEdtX._burn.call(addressRghlDJu, uintmTLfeQh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const uintWT4Yk1s = BigInt("1479")
		const addresslsbbI3t = accounts[3]
		const addressp5Y8Uub = accounts[0]
		const uintyGLX8Ta = BigInt("182")
		const uintRWi9gmv = BigInt("516")
		const uintHrYj5HZ = BigInt("1511")
		const address4bnczm = accounts[5]
		const uintoV7Dspi = BigInt("76")
		const addressbOfuPuF = "0x0000000000000000000000000000000000000001"
		const addresszFRh3Hv = accounts[0]
		const boolvquBCIk = await AntiBaseProtocolRoXEdtX.approve.call(addresslsbbI3t, uintWT4Yk1s, {from: accounts[3]});
		const addressvhaFLdH = await AntiBaseProtocolRoXEdtX.transferOwnership.call(addressp5Y8Uub, {from: accounts[2]});
		const uint256lXelLrZ = await AntiBaseProtocolRoXEdtX.findRewardFee.call(uintyGLX8Ta, {from: accounts[5]});
//		const uint256iMiIFvz = await AntiBaseProtocolRoXEdtX.burn.call(uintRWi9gmv, {from: accounts[1]});
//		const addressi27568N = await AntiBaseProtocolRoXEdtX._burn.call(address4bnczm, uintHrYj5HZ, {from: accounts[3]});
//		const addressu6X5uzW = await AntiBaseProtocolRoXEdtX._approve.call(addresszFRh3Hv, addressbOfuPuF, uintoV7Dspi, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolvquBCIk, true)
		assert.equal(uint256lXelLrZ, BigInt("10"))
		await expect(AntiBaseProtocolRoXEdtX.burn.call(uintRWi9gmv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const uintg38PSQH = BigInt("167")
		const addressql5Ypp = accounts[1]
		const addressoSU3RVL = accounts[0]
		const addressbtNnZwD = accounts[2]
		const boolilIMQes = await AntiBaseProtocolRoXEdtX.approve.call(addressql5Ypp, uintg38PSQH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256sDJ2R6w = await AntiBaseProtocolRoXEdtX.balanceOf.call(addressoSU3RVL, {from: accounts[2]});
//		await AntiBaseProtocolRoXEdtX.requestGas.call({from: accounts[3]});
//		const addressvhaFLdH = await AntiBaseProtocolRoXEdtX.transferOwnership.call(addressbtNnZwD, {from: accounts[2]});

		assert.equal(boolilIMQes, true)
		assert.equal(uint256sDJ2R6w, BigInt("0"))
		await expect(AntiBaseProtocolRoXEdtX.requestGas.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const addresswTuwtgV = accounts[2]
		const stringoW1XaCw = await AntiBaseProtocolRoXEdtX.name.call({from: accounts[0]});
		const addressvhaFLdH = await AntiBaseProtocolRoXEdtX.transferOwnership.call(addresswTuwtgV, {from: accounts[2]});

		assert.equal(stringoW1XaCw, "https://t.me/antibaseprotocol")
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const uintvbp9ga = BigInt("1175")
		const addressM0vTupn = accounts[1]
		const uintHlafUZG = BigInt("1162")
		const addressF9qd21 = "0x0000000000000000000000000000000000000000"
		const addressBOy4FHs = accounts[4]
		const addressZ3ibvJ = accounts[0]
//		const boolhRto0L = await AntiBaseProtocolRoXEdtX.transfer.call(addressM0vTupn, uintvbp9ga, {from: accounts[0]});
//		await AntiBaseProtocolRoXEdtX.requestGas.call({from: accounts[5]});
//		const boolA7T03GF = await AntiBaseProtocolRoXEdtX.transferFrom.call(addressBOy4FHs, addressF9qd21, uintHlafUZG, {from: accounts[5]});
//		const addressqe6gdW = await AntiBaseProtocolRoXEdtX._transferOwnership.call(addressZ3ibvJ, {from: accounts[2]});

		await expect(AntiBaseProtocolRoXEdtX.transfer.call(addressM0vTupn, uintvbp9ga, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const uintjNrSPcx = BigInt("1143")
		const addressre3aiPA = "0x00000000000000000000000000000000000000-1"
		const addressQbBX2mZ = accounts[4]
//		const boolA7T03GF = await AntiBaseProtocolRoXEdtX.transferFrom.call(addressQbBX2mZ, addressre3aiPA, uintjNrSPcx, {from: accounts[5]});

		await expect(AntiBaseProtocolRoXEdtX.transferFrom.call(addressQbBX2mZ, addressre3aiPA, uintjNrSPcx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const uintdG0F3Hu = BigInt("1003")
		const addresskK5V56G = accounts[2]
		const uintd19W9OL = BigInt("1823")
		const addresse2ITbFQ = accounts[3]
		const uintyN9U6wj = BigInt("809")
//		const addressZLHtFeV = await AntiBaseProtocolRoXEdtX.burnFrom.call(addresskK5V56G, uintdG0F3Hu, {from: accounts[1]});
//		const boolmZgH0Hs = await AntiBaseProtocolRoXEdtX.decreaseAllowance.call(addresse2ITbFQ, uintd19W9OL, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256lXelLrZ = await AntiBaseProtocolRoXEdtX.findRewardFee.call(uintyN9U6wj, {from: accounts[5]});

		await expect(AntiBaseProtocolRoXEdtX.burnFrom.call(addresskK5V56G, uintdG0F3Hu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const uintzu3W0ct = BigInt("182")
		const uintgAanj5x = BigInt("58")
		const addressyAmsB2 = "0x0000000000000000000000000000000000000001"
		const addressPdRmyHP = accounts[2]
		const addresss38hZ2m = accounts[0]
		const addressFE3Fxcz = accounts[2]
		const uintMYoIijS = BigInt("1980")
		const addressnXwxoCd = accounts[1]
		const uint256lXelLrZ = await AntiBaseProtocolRoXEdtX.findRewardFee.call(uintzu3W0ct, {from: accounts[5]});
//		const boolqJbjxi = await AntiBaseProtocolRoXEdtX.transferFrom.call(addressPdRmyHP, addressyAmsB2, uintgAanj5x, {from: accounts[5]});
//		const uint256GqjgkDX = await AntiBaseProtocolRoXEdtX.allowance.call(addressFE3Fxcz, addresss38hZ2m, {from: accounts[1]});
//		const boolIowJ2i1 = await AntiBaseProtocolRoXEdtX.approve.call(addressnXwxoCd, uintMYoIijS, {from: accounts[5]});

		assert.equal(uint256lXelLrZ, BigInt("10"))
		await expect(AntiBaseProtocolRoXEdtX.transferFrom.call(addressPdRmyHP, addressyAmsB2, uintgAanj5x, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const uintRRJLqEB = BigInt("58")
		const addressg3q0UEH = "0x0000000000000000000000000000000000000000"
		const addressDz7gmLZ = accounts[2]
		const uintvaNB7F = BigInt("1960")
		const addresseIs9Qbt = accounts[1]
		const uintAeLIDgw = BigInt("455")
		const addresssmiYtPH = accounts[3]
		const addresslJ0NAbe = accounts[0]
//		const boolqJbjxi = await AntiBaseProtocolRoXEdtX.transferFrom.call(addressDz7gmLZ, addressg3q0UEH, uintRRJLqEB, {from: accounts[5]});
//		const boolIowJ2i1 = await AntiBaseProtocolRoXEdtX.approve.call(addresseIs9Qbt, uintvaNB7F, {from: accounts[5]});
//		const stringanI50i = await AntiBaseProtocolRoXEdtX.name.call({from: accounts[3]});
//		const boolnrsd9YT = await AntiBaseProtocolRoXEdtX.transferFrom.call(addresslJ0NAbe, addresssmiYtPH, uintAeLIDgw, {from: accounts[2]});

		await expect(AntiBaseProtocolRoXEdtX.transferFrom.call(addressDz7gmLZ, addressg3q0UEH, uintRRJLqEB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const uintJE1z7m7 = BigInt("6")
		const addressrXHmHG4 = "0x0000000000000000000000000000000000000001"
		const addresswvaPbZz = accounts[2]
		const uintPGVNU3c = BigInt("1981")
		const addressxpj6BWA = accounts[2]
//		const boolqJbjxi = await AntiBaseProtocolRoXEdtX.transferFrom.call(addresswvaPbZz, addressrXHmHG4, uintJE1z7m7, {from: accounts[5]});
//		const addressy8AuGgF = await AntiBaseProtocolRoXEdtX._burnFrom.call(addressxpj6BWA, uintPGVNU3c, {from: accounts[0]});

		await expect(AntiBaseProtocolRoXEdtX.transferFrom.call(addresswvaPbZz, addressrXHmHG4, uintJE1z7m7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoleH9XAM7 = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintfFGvEl0 = BigInt("1684")
		const uintfkdGtn7 = BigInt("1479")
		const addressdptqQaJ = "0x0000000000000000000000000000000000000001"
		const addressp228SHi = accounts[0]
		const boolPhQbP1f = await AntiBaseProtocoleH9XAM7.isOwner.call({from: accounts[1]});
		const uint256ArpGHM = await AntiBaseProtocoleH9XAM7.burn.call(uintfFGvEl0, {from: accounts[4]});
		const boolsLfZ5de = await AntiBaseProtocoleH9XAM7.decreaseAllowance.call(addressdptqQaJ, uintfkdGtn7, {from: accounts[4]});
		const addressOUyI1qK = await AntiBaseProtocoleH9XAM7.transferOwnership.call(addressp228SHi, {from: accounts[1]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRoXEdtX = await AntiBaseProtocol.new({from: accounts[2]});
		const uintib2EfOS = BigInt("0")
		const addressllg1x3H = "0x0000000000000000000000000000000000000001"
		const addresscY4X38 = accounts[2]
		const uintyEnexu = BigInt("1707")
		const addresshf9BLap = accounts[1]
		const uintmV8iaO6 = BigInt("1596")
		const addressa86SbVC = accounts[3]
		const addressyQq5KY = accounts[2]
		const boolqJbjxi = await AntiBaseProtocolRoXEdtX.transferFrom.call(addresscY4X38, addressllg1x3H, uintib2EfOS, {from: accounts[5]});
		const boolrUIwZbx = await AntiBaseProtocolRoXEdtX.increaseAllowance.call(addresshf9BLap, uintyEnexu, {from: "0x0000000000000000000000000000000000000001"});
//		const boolwcYcYEv = await AntiBaseProtocolRoXEdtX.transferFrom.call(addressyQq5KY, addressa86SbVC, uintmV8iaO6, {from: accounts[2]});

		assert.equal(boolqJbjxi, true)
		assert.equal(boolrUIwZbx, true)
		await expect(AntiBaseProtocolRoXEdtX.transferFrom.call(addressyQq5KY, addressa86SbVC, uintmV8iaO6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})