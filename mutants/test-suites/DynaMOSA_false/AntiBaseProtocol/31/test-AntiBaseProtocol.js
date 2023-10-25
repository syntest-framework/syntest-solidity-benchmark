const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocollBiZkM2 = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uinte2Do9do = BigInt("1126")
		const uintQjM62Fu = BigInt("1822")
		const addressYXSI9wK = accounts[2]
		const uint256YZ4mF9O = await AntiBaseProtocollBiZkM2.findBurnFee.call(uinte2Do9do, {from: accounts[1]});
		const uint256AVrWJ04 = await AntiBaseProtocollBiZkM2.findRewardFee.call(uintQjM62Fu, {from: "0x0000000000000000000000000000000000000001"});
		const addressNj0YYk = await AntiBaseProtocollBiZkM2.transferOwnership.call(addressYXSI9wK, {from: accounts[0]});
		const boolhAM16D1 = await AntiBaseProtocollBiZkM2.isOwner.call({from: accounts[3]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolbCPYtxb = await AntiBaseProtocol.new({from: accounts[1]});
		const addressLAAyZut = accounts[3]
		const addresspsc8j5d = accounts[4]
//		await AntiBaseProtocolbCPYtxb.onlyOwner.call({from: accounts[1]});
//		await AntiBaseProtocolbCPYtxb.onlyOwner.call({from: accounts[4]});
//		const uint256yYMfnl6 = await AntiBaseProtocolbCPYtxb.allowance.call(addresspsc8j5d, addressLAAyZut, {from: accounts[3]});
//		const boolD1tYRgP = await AntiBaseProtocolbCPYtxb.isOwner.call({from: accounts[1]});

		await expect(AntiBaseProtocolbCPYtxb.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolA1Hx76b = await AntiBaseProtocol.new({from: accounts[2]});
		const uintmpw4iIr = BigInt("701")
		const addressmd198uk = accounts[2]
		const addressrIPP2vm = accounts[0]
		const addressABUoiy3 = accounts[2]
		const addressDmbPPin = accounts[2]
		const boolqr6UTLe = await AntiBaseProtocolA1Hx76b.approve.call(addressmd198uk, uintmpw4iIr, {from: accounts[0]});
		const uint256OPxZ4dN = await AntiBaseProtocolA1Hx76b.balanceOf.call(addressrIPP2vm, {from: accounts[1]});
		const uint256TTlhL1C = await AntiBaseProtocolA1Hx76b.allowance.call(addressDmbPPin, addressABUoiy3, {from: accounts[0]});
		const boolxT7bh06 = await AntiBaseProtocolA1Hx76b.isOwner.call({from: accounts[5]});

		assert.equal(boolqr6UTLe, true)
		assert.equal(boolxT7bh06, false)
		assert.equal(uint256OPxZ4dN, BigInt("0"))
		assert.equal(uint256TTlhL1C, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolLAoMZgN = await AntiBaseProtocol.new({from: accounts[1]});
		const uintL1U2zbh = BigInt("1108")
		const addressAwfPTgL = accounts[0]
		const uintFeXLgKD = BigInt("1326")
		const addressz8yUoB0 = accounts[1]
		const addressSb4wtIm = accounts[1]
//		const addressmDc3ZkB = await AntiBaseProtocolLAoMZgN.burnFrom.call(addressAwfPTgL, uintL1U2zbh, {from: accounts[2]});
//		const stringnrl2CNI = await AntiBaseProtocolLAoMZgN.name.call({from: accounts[4]});
//		const boolZSMChIL = await AntiBaseProtocolLAoMZgN.transfer.call(addressz8yUoB0, uintFeXLgKD, {from: accounts[1]});
//		const addressdP05nhG = await AntiBaseProtocolLAoMZgN._transferOwnership.call(addressSb4wtIm, {from: accounts[5]});

		await expect(AntiBaseProtocolLAoMZgN.burnFrom.call(addressAwfPTgL, uintL1U2zbh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolb8LGPHv = await AntiBaseProtocol.new({from: accounts[4]});
		const uintVvPF42 = BigInt("1210")
		const addressmsqEA5 = accounts[1]
		const stringpgpO3dd = await AntiBaseProtocolb8LGPHv.symbol.call({from: accounts[4]});
		const uint256ou1Vvu = await AntiBaseProtocolb8LGPHv.totalSupply.call({from: accounts[4]});
		const boolSOmyob1 = await AntiBaseProtocolb8LGPHv.isOwner.call({from: accounts[0]});
//		const boolRwb7Tk5 = await AntiBaseProtocolb8LGPHv.decreaseAllowance.call(addressmsqEA5, uintVvPF42, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolSOmyob1, false)
		assert.equal(stringpgpO3dd, "ABASE")
		assert.equal(uint256ou1Vvu, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolb8LGPHv.decreaseAllowance.call(addressmsqEA5, uintVvPF42, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const stringa1eGFzE = "98pi6mrahFSH8F3ADg19VX6MPLXqila9VKLfkUQBcnPlRNY"
		const stringp8ehlMf = "QjqeIBWeOMKsuN0lzHTrdnvOaoTwWwN8YCDfOJgXzdSABkEPAQykwoHfwVBZvlfjfrgXkTHhFsnRtVmUPbzqWuuGGqpH8B"
		const uintMIsai6W = BigInt("26")
		const AntiBaseProtocolapfd8xU = await AntiBaseProtocol.new(stringa1eGFzE, stringp8ehlMf, uintMIsai6W, {from: accounts[1]});
		const uintzX6tsYK = BigInt("1878")
		const addressJgm9rA = accounts[3]
		const addressc7Ta7HL = accounts[3]
		const boolORAjfMW = await AntiBaseProtocolapfd8xU.approve.call(addressJgm9rA, uintzX6tsYK, {from: accounts[0]});
		const stringdmJSk2k = await AntiBaseProtocolapfd8xU.symbol.call({from: accounts[1]});
		const addresskyYMBIh = await AntiBaseProtocolapfd8xU.transferOwnership.call(addressc7Ta7HL, {from: accounts[3]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolafE6pVZ = await AntiBaseProtocol.new({from: accounts[4]});
		const uintlc35lJs = BigInt("1951")
		const uint9glMa2 = BigInt("91")
		const addressHyixwO = accounts[2]
		const addressXpj6569 = accounts[0]
		const uintAWdqx0G = BigInt("685")
		const addresslTZMwKh = accounts[4]
		const uint256DZU8m2K = await AntiBaseProtocolafE6pVZ.findRewardFee.call(uintlc35lJs, {from: accounts[1]});
//		const boolVSzVrR0 = await AntiBaseProtocolafE6pVZ.transferFrom.call(addressXpj6569, addressHyixwO, uint9glMa2, {from: accounts[3]});
//		const boolMKq0hsv = await AntiBaseProtocolafE6pVZ.increaseAllowance.call(addresslTZMwKh, uintAWdqx0G, {from: accounts[2]});

		assert.equal(uint256DZU8m2K, BigInt("100"))
		await expect(AntiBaseProtocolafE6pVZ.transferFrom.call(addressXpj6569, addressHyixwO, uint9glMa2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolpG1KcqK = await AntiBaseProtocol.new({from: accounts[1]});
		const addressRC1gj9p = accounts[5]
		const uintBgybsT0 = BigInt("1511")
		const addressSBskJyQ = accounts[2]
		const uintoxFmwWV = BigInt("1687")
		const addressID4aRGk = accounts[5]
//		await AntiBaseProtocolpG1KcqK.renounceOwnership.call({from: accounts[0]});
//		const addressV07UCHC = await AntiBaseProtocolpG1KcqK.transferOwnership.call(addressRC1gj9p, {from: accounts[1]});
//		const boolk0FES1 = await AntiBaseProtocolpG1KcqK.approve.call(addressSBskJyQ, uintBgybsT0, {from: accounts[2]});
//		const uint8jmwHTHR = await AntiBaseProtocolpG1KcqK.decimals.call({from: accounts[2]});
//		const boolh6Co90T = await AntiBaseProtocolpG1KcqK.transfer.call(addressID4aRGk, uintoxFmwWV, {from: accounts[4]});

		await expect(AntiBaseProtocolpG1KcqK.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolb8LGPHv = await AntiBaseProtocol.new({from: accounts[4]});
		const uintt4LB63p = BigInt("480")
		const addressSaPXxR = accounts[3]
		const addressAuoKNQb = accounts[3]
		const uintvt6dP3X = BigInt("364")
		const addresszX8BKSR = accounts[3]
		const uintGrwR7LG = BigInt("1452")
		const addresssOOxAnH = "0x0000000000000000000000000000000000000000"
		const addressPSyQBmT = accounts[3]
		const uintOgeTJv6 = BigInt("1210")
		const addressvLpiIcM = accounts[1]
		const stringpgpO3dd = await AntiBaseProtocolb8LGPHv.symbol.call({from: accounts[4]});
		const uint256ou1Vvu = await AntiBaseProtocolb8LGPHv.totalSupply.call({from: accounts[4]});
		const boolSOmyob1 = await AntiBaseProtocolb8LGPHv.isOwner.call({from: accounts[0]});
		const addressNxoCRE = await AntiBaseProtocolb8LGPHv.owner.call({from: accounts[2]});
//		const boolvmfOneL = await AntiBaseProtocolb8LGPHv.transferFrom.call(addressAuoKNQb, addressSaPXxR, uintt4LB63p, {from: "0x0000000000000000000000000000000000000001"});
//		const boolnGpb8P7 = await AntiBaseProtocolb8LGPHv.decreaseAllowance.call(addresszX8BKSR, uintvt6dP3X, {from: accounts[4]});
//		const addresst6HDmc = await AntiBaseProtocolb8LGPHv._approve.call(addressPSyQBmT, addresssOOxAnH, uintGrwR7LG, {from: accounts[3]});
//		const boolRwb7Tk5 = await AntiBaseProtocolb8LGPHv.decreaseAllowance.call(addressvLpiIcM, uintOgeTJv6, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressNxoCRE, 0xe895eeaD40558fd09992CEDcd02A9FA3cEF00ED4)
		assert.equal(boolSOmyob1, false)
		assert.equal(stringpgpO3dd, "ABASE")
		assert.equal(uint256ou1Vvu, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolb8LGPHv.transferFrom.call(addressAuoKNQb, addressSaPXxR, uintt4LB63p, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolb8LGPHv = await AntiBaseProtocol.new({from: accounts[4]});
		const uintu22lzeD = BigInt("1720")
		const uintMAPlka8 = BigInt("578")
		const addresszRFRgs1 = "0x0000000000000000000000000000000000000001"
		const uintl1WJpWT = BigInt("825")
		const uintXrJtUR = BigInt("1251")
		const addressGhRxllp = accounts[1]
		const stringpgpO3dd = await AntiBaseProtocolb8LGPHv.symbol.call({from: accounts[4]});
		const uint256ou1Vvu = await AntiBaseProtocolb8LGPHv.totalSupply.call({from: accounts[4]});
		const uint256nrUAnsd = await AntiBaseProtocolb8LGPHv.findBurnFee.call(uintu22lzeD, {from: accounts[0]});
		const boolSOmyob1 = await AntiBaseProtocolb8LGPHv.isOwner.call({from: accounts[0]});
//		const addressLk9DGLc = await AntiBaseProtocolb8LGPHv.burnFrom.call(addresszRFRgs1, uintMAPlka8, {from: accounts[2]});
//		const uint256bWkkjNy = await AntiBaseProtocolb8LGPHv.findRewardFee.call(uintl1WJpWT, {from: accounts[1]});
//		const boolRwb7Tk5 = await AntiBaseProtocolb8LGPHv.decreaseAllowance.call(addressGhRxllp, uintXrJtUR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolSOmyob1, false)
		assert.equal(stringpgpO3dd, "ABASE")
		assert.equal(uint256nrUAnsd, BigInt("270"))
		assert.equal(uint256ou1Vvu, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolb8LGPHv.burnFrom.call(addresszRFRgs1, uintMAPlka8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolb8LGPHv = await AntiBaseProtocol.new({from: accounts[4]});
		const uintY3r0aL = BigInt("825")
		const uintWpeDVxM = BigInt("1210")
		const addressdxoA0UX = accounts[1]
		const uint8bpP7ovD = await AntiBaseProtocolb8LGPHv.decimals.call({from: accounts[5]});
		const stringpgpO3dd = await AntiBaseProtocolb8LGPHv.symbol.call({from: accounts[4]});
		const uint256ou1Vvu = await AntiBaseProtocolb8LGPHv.totalSupply.call({from: accounts[4]});
		const boolSOmyob1 = await AntiBaseProtocolb8LGPHv.isOwner.call({from: accounts[0]});
		const uint256bWkkjNy = await AntiBaseProtocolb8LGPHv.findRewardFee.call(uintY3r0aL, {from: accounts[1]});
//		const boolRwb7Tk5 = await AntiBaseProtocolb8LGPHv.decreaseAllowance.call(addressdxoA0UX, uintWpeDVxM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolSOmyob1, false)
		assert.equal(stringpgpO3dd, "ABASE")
		assert.equal(uint256bWkkjNy, BigInt("45"))
		assert.equal(uint256ou1Vvu, BigInt("31250000000000000000"))
		assert.equal(uint8bpP7ovD, BigInt("18"))
		await expect(AntiBaseProtocolb8LGPHv.decreaseAllowance.call(addressdxoA0UX, uintWpeDVxM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolUqC3js = await AntiBaseProtocol.new({from: accounts[1]});
		const uintvHdRJQk = BigInt("1195")
		const addresszprybB9 = accounts[1]
		const uinthtd8Ve0 = BigInt("492")
		const addressptxVydD = accounts[1]
		const uintSVPSh4q = BigInt("637")
		const addressXlVQU5M = "0x0000000000000000000000000000000000000001"
		const uintGiCly3i = BigInt("745")
		const addressDpRr7QU = accounts[3]
//		const addressiQkQG4 = await AntiBaseProtocolUqC3js.burnFrom.call(addresszprybB9, uintvHdRJQk, {from: accounts[3]});
//		const boolaKGMsyT = await AntiBaseProtocolUqC3js.increaseAllowance.call(addressptxVydD, uinthtd8Ve0, {from: "0x0000000000000000000000000000000000000001"});
//		const boole6ku0EO = await AntiBaseProtocolUqC3js.increaseAllowance.call(addressXlVQU5M, uintSVPSh4q, {from: accounts[5]});
//		const addressxL8Qjo = await AntiBaseProtocolUqC3js._burn.call(addressDpRr7QU, uintGiCly3i, {from: accounts[1]});

		await expect(AntiBaseProtocolUqC3js.burnFrom.call(addresszprybB9, uintvHdRJQk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolafE6pVZ = await AntiBaseProtocol.new({from: accounts[4]});
		const uintbczDXgT = BigInt("1943")
		const uintbTAozE6 = BigInt("1553")
		const addressY2dqF2C = accounts[1]
		const uintgRLBLGP = BigInt("1271")
		const addressqKoNmf1 = accounts[2]
		const addressgOCOMy4 = accounts[0]
		const uintrfLfd6Q = BigInt("685")
		const addressRWbM0J = accounts[4]
		const uint256DZU8m2K = await AntiBaseProtocolafE6pVZ.findRewardFee.call(uintbczDXgT, {from: accounts[1]});
//		const boolD9g4NhG = await AntiBaseProtocolafE6pVZ.transfer.call(addressY2dqF2C, uintbTAozE6, {from: accounts[0]});
//		const boolVSzVrR0 = await AntiBaseProtocolafE6pVZ.transferFrom.call(addressgOCOMy4, addressqKoNmf1, uintgRLBLGP, {from: accounts[3]});
//		await AntiBaseProtocolafE6pVZ.renounceOwnership.call({from: accounts[1]});
//		const boolMKq0hsv = await AntiBaseProtocolafE6pVZ.increaseAllowance.call(addressRWbM0J, uintrfLfd6Q, {from: accounts[2]});

		assert.equal(uint256DZU8m2K, BigInt("100"))
		await expect(AntiBaseProtocolafE6pVZ.transfer.call(addressY2dqF2C, uintbTAozE6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolafE6pVZ = await AntiBaseProtocol.new({from: accounts[4]});
		const uintq3RTQsL = BigInt("1951")
		const uintx2wWIR = BigInt("685")
		const addressMgNFuF = accounts[4]
		const uint256DZU8m2K = await AntiBaseProtocolafE6pVZ.findRewardFee.call(uintq3RTQsL, {from: accounts[1]});
		const boolMKq0hsv = await AntiBaseProtocolafE6pVZ.increaseAllowance.call(addressMgNFuF, uintx2wWIR, {from: accounts[2]});

		assert.equal(boolMKq0hsv, true)
		assert.equal(uint256DZU8m2K, BigInt("100"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolafE6pVZ = await AntiBaseProtocol.new({from: accounts[4]});
		const uintME4yfVZ = BigInt("626")
		const uintNkvGFpc = BigInt("315")
		const uintF0gjq0M = BigInt("685")
		const addressncMJT8T = accounts[4]
		const uintjnSAAp = BigInt("1033")
		const addressrKep6Gf = accounts[5]
		const uint256DZU8m2K = await AntiBaseProtocolafE6pVZ.findRewardFee.call(uintME4yfVZ, {from: accounts[1]});
		const uint256XAvdE1h = await AntiBaseProtocolafE6pVZ.totalSupply.call({from: accounts[2]});
//		const uint256dxjgnqd = await AntiBaseProtocolafE6pVZ.burn.call(uintNkvGFpc, {from: "0x0000000000000000000000000000000000000001"});
//		const boolMKq0hsv = await AntiBaseProtocolafE6pVZ.increaseAllowance.call(addressncMJT8T, uintF0gjq0M, {from: accounts[2]});
//		const addressX6E89yX = await AntiBaseProtocolafE6pVZ._burnFrom.call(addressrKep6Gf, uintjnSAAp, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256DZU8m2K, BigInt("35"))
		assert.equal(uint256XAvdE1h, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolafE6pVZ.burn.call(uintNkvGFpc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolafE6pVZ = await AntiBaseProtocol.new({from: accounts[4]});
		const uintPCJ1NZ1 = BigInt("1943")
		const uintN3u04Q0 = BigInt("1553")
		const addressFMcDMap = accounts[1]
		const uintrgc6Fbn = BigInt("685")
		const addressOaWrwnj = accounts[4]
		const uint256DZU8m2K = await AntiBaseProtocolafE6pVZ.findRewardFee.call(uintPCJ1NZ1, {from: accounts[1]});
		const stringzK53aJS = await AntiBaseProtocolafE6pVZ.name.call({from: accounts[2]});
//		const boolD9g4NhG = await AntiBaseProtocolafE6pVZ.transfer.call(addressFMcDMap, uintN3u04Q0, {from: accounts[0]});
//		const boolMKq0hsv = await AntiBaseProtocolafE6pVZ.increaseAllowance.call(addressOaWrwnj, uintrgc6Fbn, {from: accounts[2]});

		assert.equal(stringzK53aJS, "https://t.me/antibaseprotocol")
		assert.equal(uint256DZU8m2K, BigInt("100"))
		await expect(AntiBaseProtocolafE6pVZ.transfer.call(addressFMcDMap, uintN3u04Q0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolafE6pVZ = await AntiBaseProtocol.new({from: accounts[4]});
		const uintoNABML8 = BigInt("1943")
		const uintkqG0De5 = BigInt("353")
		const addressiXoDJu1 = accounts[5]
		const addressvQRaqYS = accounts[4]
		const uintDdfbsZ9 = BigInt("1553")
		const addressDronqWZ = accounts[2]
		const uintp954Xs = BigInt("685")
		const addressJnuNk5D = accounts[4]
		const uint256DZU8m2K = await AntiBaseProtocolafE6pVZ.findRewardFee.call(uintoNABML8, {from: accounts[1]});
//		const boolvxcLuEG = await AntiBaseProtocolafE6pVZ.transferFrom.call(addressvQRaqYS, addressiXoDJu1, uintkqG0De5, {from: accounts[0]});
//		const boolsvDXaS5 = await AntiBaseProtocolafE6pVZ.isOwner.call({from: accounts[4]});
//		const boolD9g4NhG = await AntiBaseProtocolafE6pVZ.transfer.call(addressDronqWZ, uintDdfbsZ9, {from: accounts[0]});
//		const boolMKq0hsv = await AntiBaseProtocolafE6pVZ.increaseAllowance.call(addressJnuNk5D, uintp954Xs, {from: accounts[2]});

		assert.equal(uint256DZU8m2K, BigInt("100"))
		await expect(AntiBaseProtocolafE6pVZ.transferFrom.call(addressvQRaqYS, addressiXoDJu1, uintkqG0De5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolafE6pVZ = await AntiBaseProtocol.new({from: accounts[4]});
		const uintqu8amfz = BigInt("1943")
		const uint1firaP = BigInt("353")
		const addressySsM6jS = accounts[5]
		const addressTnEM1cO = accounts[4]
		const uintI8O0I5w = BigInt("1553")
		const addressa7s7J3J = accounts[3]
		const uinttAOzaPk = BigInt("88")
		const addressIS5s5Sq = accounts[5]
		const uintttLI0Ht = BigInt("685")
		const addressvnEdIvi = accounts[4]
		const uint256DZU8m2K = await AntiBaseProtocolafE6pVZ.findRewardFee.call(uintqu8amfz, {from: accounts[1]});
//		await AntiBaseProtocolafE6pVZ.renounceOwnership.call({from: accounts[4]});
//		const boolvxcLuEG = await AntiBaseProtocolafE6pVZ.transferFrom.call(addressTnEM1cO, addressySsM6jS, uint1firaP, {from: accounts[0]});
//		const uint256WYt0VNq = await AntiBaseProtocolafE6pVZ.totalSupply.call({from: accounts[3]});
//		const boolsvDXaS5 = await AntiBaseProtocolafE6pVZ.isOwner.call({from: accounts[4]});
//		const boolD9g4NhG = await AntiBaseProtocolafE6pVZ.transfer.call(addressa7s7J3J, uintI8O0I5w, {from: accounts[0]});
//		const addresslKahF3 = await AntiBaseProtocolafE6pVZ._mint.call(addressIS5s5Sq, uinttAOzaPk, {from: accounts[4]});
//		const boolMKq0hsv = await AntiBaseProtocolafE6pVZ.increaseAllowance.call(addressvnEdIvi, uintttLI0Ht, {from: accounts[2]});

		assert.equal(uint256DZU8m2K, BigInt("100"))
		await expect(AntiBaseProtocolafE6pVZ.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolafE6pVZ = await AntiBaseProtocol.new({from: accounts[4]});
		const uintnivSOQd = BigInt("249")
		const uintoQgCGWH = BigInt("1211")
		const addressIkBXcbf = "0x00000000000000000000000000000000000000-1"
		const uintRQ34VHt = BigInt("1666")
		const addressJngWYSy = accounts[4]
		const addressvXMa5yf = accounts[0]
		const addressBjHfJIi = accounts[1]
		const addressGzxiT5 = accounts[3]
		const uintoEgEQ5 = BigInt("1833")
		const addressV4caNo6 = "0x0000000000000000000000000000000000000001"
		const stringWAn6lC = await AntiBaseProtocolafE6pVZ.symbol.call({from: accounts[1]});
		const uint256DZU8m2K = await AntiBaseProtocolafE6pVZ.findRewardFee.call(uintnivSOQd, {from: accounts[1]});
//		const boolpHQjVFA = await AntiBaseProtocolafE6pVZ.transfer.call(addressIkBXcbf, uintoQgCGWH, {from: accounts[5]});
//		await AntiBaseProtocolafE6pVZ.requestGas.call({from: accounts[3]});
//		const address4J0fRQ = await AntiBaseProtocolafE6pVZ._approve.call(addressvXMa5yf, addressJngWYSy, uintRQ34VHt, {from: accounts[4]});
//		const uint256C2RZgMz = await AntiBaseProtocolafE6pVZ.allowance.call(addressGzxiT5, addressBjHfJIi, {from: accounts[0]});
//		const boolx41uvIY = await AntiBaseProtocolafE6pVZ.decreaseAllowance.call(addressV4caNo6, uintoEgEQ5, {from: accounts[3]});

		assert.equal(stringWAn6lC, "ABASE")
		assert.equal(uint256DZU8m2K, BigInt("15"))
		await expect(AntiBaseProtocolafE6pVZ.transfer.call(addressIkBXcbf, uintoQgCGWH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolafE6pVZ = await AntiBaseProtocol.new({from: accounts[4]});
		const uintVHhziUR = BigInt("0")
		const uintD8FwUth = BigInt("767")
		const addressDK0brn = accounts[2]
		const uint256HHdM42J = await AntiBaseProtocolafE6pVZ.findBurnFee.call(uintVHhziUR, {from: accounts[4]});
//		const boolD9g4NhG = await AntiBaseProtocolafE6pVZ.transfer.call(addressDK0brn, uintD8FwUth, {from: accounts[0]});

		assert.equal(uint256HHdM42J, BigInt("0"))
		await expect(AntiBaseProtocolafE6pVZ.transfer.call(addressDK0brn, uintD8FwUth, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolafE6pVZ = await AntiBaseProtocol.new({from: accounts[4]});
		const uintzN7ymOf = BigInt("32")
		const addresswOMI61I = accounts[3]
		const uintF8H7h8 = BigInt("354")
		const addresse60bLMx = accounts[5]
		const addressa1NCREQ = accounts[4]
		const uintoTPdy9s = BigInt("767")
		const addressDoYqUv = accounts[2]
		const uintSplfvfE = BigInt("685")
		const addressVv4ZEme = accounts[4]
		const uint256HHdM42J = await AntiBaseProtocolafE6pVZ.findBurnFee.call(uintzN7ymOf, {from: accounts[4]});
		const addressDBriB4l = await AntiBaseProtocolafE6pVZ.transferOwnership.call(addresswOMI61I, {from: accounts[4]});
//		const boolvxcLuEG = await AntiBaseProtocolafE6pVZ.transferFrom.call(addressa1NCREQ, addresse60bLMx, uintF8H7h8, {from: accounts[0]});
//		await AntiBaseProtocolafE6pVZ.requestGas.call({from: accounts[4]});
//		const boolD9g4NhG = await AntiBaseProtocolafE6pVZ.transfer.call(addressDoYqUv, uintoTPdy9s, {from: accounts[0]});
//		const boolMKq0hsv = await AntiBaseProtocolafE6pVZ.increaseAllowance.call(addressVv4ZEme, uintSplfvfE, {from: accounts[2]});

		assert.equal(uint256HHdM42J, BigInt("15"))
		await expect(AntiBaseProtocolafE6pVZ.transferFrom.call(addressa1NCREQ, addresse60bLMx, uintF8H7h8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})