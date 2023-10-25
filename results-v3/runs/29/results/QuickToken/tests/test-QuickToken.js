const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressE8YvMzE = accounts[3]
		const addressU1LqAN = accounts[2]
		const QuickTokenQN5jKcL = await QuickToken.new(addressE8YvMzE, addressU1LqAN, {from: accounts[2]});
		const addressGBOtmd2 = accounts[2]
		const addressPVPFmY2 = accounts[4]
		const uinteB9eeYt = BigInt("735")
		const addressU1nDZFA = accounts[4]
		const addressGCVyS5w = accounts[1]
		const addressMkaENCJ = accounts[3]
		const uintpsulsIQ = BigInt("1144")
		const addressWqOQQA0 = accounts[0]
		const uintR9vdfiY = BigInt("388")
		const addressANpTfi = accounts[1]
		const addressp5OQED7 = accounts[3]
		const uintPS3P6pH = await QuickTokenQN5jKcL.allowance.call(addressPVPFmY2, addressGBOtmd2, {from: accounts[2]});
		const boolHP5y5yZ = await QuickTokenQN5jKcL.transfer.call(addressU1nDZFA, uinteB9eeYt, {from: accounts[3]});
		const uintGjdQUjm = await QuickTokenQN5jKcL.allowance.call(addressMkaENCJ, addressGCVyS5w, {from: accounts[1]});
		const boolnWkQ07 = await QuickTokenQN5jKcL.transfer.call(addressWqOQQA0, uintpsulsIQ, {from: accounts[4]});
		const boolsECxWF = await QuickTokenQN5jKcL.transfer.call(addressANpTfi, uintR9vdfiY, {from: accounts[0]});
		const uint0IyOn5 = await QuickTokenQN5jKcL.balanceOf.call(addressp5OQED7, {from: accounts[1]});

		assert.equal(boolHP5y5yZ, true)
		assert.equal(uintGjdQUjm, BigInt("0"))
		assert.equal(uintPS3P6pH, BigInt("0"))
		await expect(QuickTokenQN5jKcL.transfer.call(addressWqOQQA0, uintpsulsIQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressgrUIZlK = accounts[4]
		const addressHaMcSpi = accounts[5]
		const QuickTokeno3baeHJ = await QuickToken.new(addressgrUIZlK, addressHaMcSpi, {from: accounts[2]});
		const uintXRFAtL9 = BigInt("1268")
		const addressyLIYpXI = accounts[4]
		const uintLK4FkO1 = BigInt("590")
		const addressX055BLB = "0x0000000000000000000000000000000000000001"
		const uintzOqa7g = BigInt("1669")
		const addressA77NlRe = accounts[4]
		const addressTjdDPea = accounts[0]
		const uintMNOf1xh = BigInt("1459")
		const addressIa0WeLy = accounts[0]
		const addressSH3bjb1 = await QuickTokeno3baeHJ.mint.call(addressyLIYpXI, uintXRFAtL9, {from: accounts[3]});
		const addressoAjfp5J = await QuickTokeno3baeHJ.mint.call(addressX055BLB, uintLK4FkO1, {from: accounts[2]});
		const addressvlURw41 = await QuickTokeno3baeHJ.mint.call(addressA77NlRe, uintzOqa7g, {from: accounts[0]});
		const uintKxtdhmv = await QuickTokeno3baeHJ.balanceOf.call(addressTjdDPea, {from: accounts[4]});
		const boolwfqdIrZ = await QuickTokeno3baeHJ.transfer.call(addressIa0WeLy, uintMNOf1xh, {from: accounts[1]});

		await expect(QuickTokeno3baeHJ.mint.call(addressyLIYpXI, uintXRFAtL9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressp9i2n96 = accounts[5]
		const addressoRo1Ha = accounts[2]
		const QuickTokengSEtDcC = await QuickToken.new(addressp9i2n96, addressoRo1Ha, {from: accounts[1]});
		const addressAGaOve2 = accounts[1]
		const uintaPvCxIY = BigInt("104")
		const addressjZjzjCG = accounts[1]
		const addressn7eUqRN = accounts[4]
		const addressXXZIMUc = "0x0000000000000000000000000000000000000001"
		const addressCWHRkvl = await QuickTokengSEtDcC.setMinter.call(addressAGaOve2, {from: accounts[1]});
		const addressn3hIQIB = await QuickTokengSEtDcC.mint.call(addressjZjzjCG, uintaPvCxIY, {from: "0x0000000000000000000000000000000000000001"});
		const addressNT4UZpf = await QuickTokengSEtDcC.setMinter.call(addressn7eUqRN, {from: accounts[5]});
		const addressRaSXcf = await QuickTokengSEtDcC.setMinter.call(addressXXZIMUc, {from: accounts[1]});

		await expect(QuickTokengSEtDcC.setMinter.call(addressAGaOve2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressTQUBw5Y = accounts[2]
		const addressK4BJrxr = accounts[0]
		const QuickTokenyPpSwR0 = await QuickToken.new(addressTQUBw5Y, addressK4BJrxr, {from: accounts[3]});
		const addressgqwwe5 = accounts[1]
		const addressUfWiGM4 = accounts[2]
		const uint5rdiyL = BigInt("984")
		const addressJra86M0 = accounts[4]
		const addressHUQYeC = accounts[3]
		const uintYA4tS3J = await QuickTokenyPpSwR0.balanceOf.call(addressgqwwe5, {from: accounts[2]});
		const uintxmhRnpt = await QuickTokenyPpSwR0.balanceOf.call(addressUfWiGM4, {from: accounts[2]});
		const boolYXUdAuj = await QuickTokenyPpSwR0.transferFrom.call(addressHUQYeC, addressJra86M0, uint5rdiyL, {from: accounts[3]});

		assert.equal(uintYA4tS3J, BigInt("0"))
		assert.equal(uintxmhRnpt, BigInt("2000000000000"))
		await expect(QuickTokenyPpSwR0.transferFrom.call(addressHUQYeC, addressJra86M0, uint5rdiyL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresspSyR857 = accounts[1]
		const addressS8YgI9Q = accounts[3]
		const QuickTokeneCzUpv = await QuickToken.new(addresspSyR857, addressS8YgI9Q, {from: accounts[1]});
		const addressavIHmeC = accounts[5]
		const addressAN8rZTI = accounts[4]
		const addressyK5NoAz = accounts[0]
		const uintbWazWmL = BigInt("1334")
		const addresske5Ub5k = accounts[3]
		const uintnpJUjak = await QuickTokeneCzUpv.allowance.call(addressAN8rZTI, addressavIHmeC, {from: accounts[2]});
		const uintCMh7vQd = await QuickTokeneCzUpv.balanceOf.call(addressyK5NoAz, {from: accounts[4]});
		const boolyCmPCU7 = await QuickTokeneCzUpv.approve.call(addresske5Ub5k, uintbWazWmL, {from: accounts[2]});

		assert.equal(boolyCmPCU7, true)
		assert.equal(uintCMh7vQd, BigInt("0"))
		assert.equal(uintnpJUjak, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addresscMkrxp5 = accounts[0]
		const addressGUnKYYq = accounts[1]
		const QuickTokenIXU3krD = await QuickToken.new(addresscMkrxp5, addressGUnKYYq, {from: accounts[5]});
		const uint2KWAEE = BigInt("552")
		const addressKQ6VRE = accounts[3]
		const addressCYfIlKr = accounts[1]
		const addressEh4QlT2 = accounts[3]
		const addressHvFZJoN = accounts[1]
		const addressT9VQQrn = accounts[1]
		const addressjUAXt3l = accounts[5]
		const addressfA3lyJ4 = await QuickTokenIXU3krD.mint.call(addressKQ6VRE, uint2KWAEE, {from: accounts[1]});
		const addresssnwCcAd = await QuickTokenIXU3krD.setMinter.call(addressCYfIlKr, {from: accounts[0]});
		const uintgKVTRI8 = await QuickTokenIXU3krD.allowance.call(addressHvFZJoN, addressEh4QlT2, {from: accounts[4]});
		const addressLR10e4W = await QuickTokenIXU3krD.setMinter.call(addressT9VQQrn, {from: accounts[0]});
		const uinthSmQtMs = await QuickTokenIXU3krD.balanceOf.call(addressjUAXt3l, {from: accounts[0]});

		await expect(QuickTokenIXU3krD.setMinter.call(addressCYfIlKr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressMiOAtnY = accounts[1]
		const addresspwrwQw = accounts[3]
		const QuickTokeneCzUpv = await QuickToken.new(addressMiOAtnY, addresspwrwQw, {from: accounts[1]});
		const uintfG923TR = BigInt("486")
		const addressFy74EHx = accounts[0]
		const addressBQGBASF = accounts[4]
		const uintZSAoXvT = BigInt("891")
		const addressZUI6GEe = accounts[4]
		const addressevhKMjf = accounts[5]
		const uintgOasD33 = BigInt("1334")
		const addressusSMeZ = accounts[3]
		const boolygiy8og = await QuickTokeneCzUpv.transferFrom.call(addressBQGBASF, addressFy74EHx, uintfG923TR, {from: accounts[3]});
		const booloFDwdVp = await QuickTokeneCzUpv.transferFrom.call(addressevhKMjf, addressZUI6GEe, uintZSAoXvT, {from: accounts[3]});
		const boolyCmPCU7 = await QuickTokeneCzUpv.approve.call(addressusSMeZ, uintgOasD33, {from: accounts[2]});

		await expect(QuickTokeneCzUpv.transferFrom.call(addressBQGBASF, addressFy74EHx, uintfG923TR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressYC5OB1G = accounts[2]
		const addressv2gO8Nh = accounts[3]
		const QuickTokenS345Gbt = await QuickToken.new(addressYC5OB1G, addressv2gO8Nh, {from: "0x0000000000000000000000000000000000000001"});
		const uintKwIdl0 = BigInt("661")
		const addressz83REDH = "0x0000000000000000000000000000000000000001"
		const addressX3SUcY = accounts[3]
		const uintGjY5MiQ = BigInt("1136")
		const addressCf3dmEX = accounts[5]
		const uintzLtDL1T = BigInt("26")
		const addressA3x9oZ2 = accounts[1]
		const addressllOIxmH = await QuickTokenS345Gbt.mint.call(addressz83REDH, uintKwIdl0, {from: accounts[1]});
		const uintiZ46WoA = await QuickTokenS345Gbt.balanceOf.call(addressX3SUcY, {from: accounts[3]});
		const boolxnNQyj = await QuickTokenS345Gbt.approve.call(addressCf3dmEX, uintGjY5MiQ, {from: accounts[4]});
		const boolEclaHt = await QuickTokenS345Gbt.transfer.call(addressA3x9oZ2, uintzLtDL1T, {from: accounts[1]});
	});
})