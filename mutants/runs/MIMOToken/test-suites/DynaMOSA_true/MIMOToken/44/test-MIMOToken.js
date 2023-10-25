const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenH8M1KSy = await MIMOToken.new({from: accounts[5]});
		const addresselivCG1 = accounts[1]
		const addressKBXoZI = accounts[2]
		const addressIYKQYnR = accounts[3]
		const uintKq9khPp = BigInt("1088")
		const uinthIwLsmp = await MIMOTokenH8M1KSy.allowance.call(addressKBXoZI, addresselivCG1, {from: accounts[4]});
		const uintLUz5NTa = await MIMOTokenH8M1KSy.totalSupply.call({from: accounts[0]});
		const uintRUocQyc = await MIMOTokenH8M1KSy.balanceOf.call(addressIYKQYnR, {from: accounts[4]});
		const uint256fuKHBg3 = await MIMOTokenH8M1KSy.setMinFee.call(uintKq9khPp, {from: accounts[3]});

		assert.equal(uintLUz5NTa, BigInt("16000000000000000000000000"))
		assert.equal(uintRUocQyc, BigInt("0"))
		assert.equal(uinthIwLsmp, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenis69szG = await MIMOToken.new({from: accounts[2]});
		const address5A02At = "0x0000000000000000000000000000000000000001"
		const addressVY0xTMH = accounts[3]
		const addresseHZ3M4e = accounts[4]
		const addressKCs2zCD = accounts[2]
		const addressGu0Q93H = accounts[1]
		const uintF5rthaH = BigInt("994")
		const addressVT3zusz = accounts[3]
		const addressYflgb7 = accounts[2]
		const addressgeJs88 = accounts[1]
		const uintjaeNobe = await MIMOTokenis69szG.allowance.call(addressVY0xTMH, address5A02At, {from: accounts[1]});
		const uinto3JlH4C = await MIMOTokenis69szG.balanceOf.call(addresseHZ3M4e, {from: accounts[0]});
		const uintuBNL7ol = await MIMOTokenis69szG.allowance.call(addressGu0Q93H, addressKCs2zCD, {from: accounts[4]});
		const boolxabmLlR = await MIMOTokenis69szG.transfer.call(addressVT3zusz, uintF5rthaH, {from: accounts[1]});
		const uintqGYwokx = await MIMOTokenis69szG.allowance.call(addressgeJs88, addressYflgb7, {from: accounts[2]});

		assert.equal(uintjaeNobe, BigInt("0"))
		assert.equal(uinto3JlH4C, BigInt("0"))
		assert.equal(uintuBNL7ol, BigInt("0"))
		await expect(MIMOTokenis69szG.transfer.call(addressVT3zusz, uintF5rthaH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenjlvgulE = await MIMOToken.new({from: accounts[0]});
		const addressoN8Dhc = accounts[1]
		const addressxlmtWvq = "0x0000000000000000000000000000000000000001"
		const uintaHuNe3q = BigInt("213")
		const addressrRVT8HL = accounts[2]
		const uintdCDNBIj = BigInt("1540")
		const addresslvzrZA7 = accounts[2]
		const uintTd6ibcA = await MIMOTokenjlvgulE.allowance.call(addressxlmtWvq, addressoN8Dhc, {from: "0x0000000000000000000000000000000000000001"});
		const boolpwio0Rr = await MIMOTokenjlvgulE.approve.call(addressrRVT8HL, uintaHuNe3q, {from: accounts[2]});
		const uint256yLOyxNz = await MIMOTokenjlvgulE.setMinFee.call(uintdCDNBIj, {from: accounts[0]});
		const uintId2tg5u = await MIMOTokenjlvgulE.balanceOf.call(addresslvzrZA7, {from: accounts[0]});

		assert.equal(boolpwio0Rr, true)
		assert.equal(uintId2tg5u, BigInt("0"))
		assert.equal(uintTd6ibcA, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenAoONzfW = await MIMOToken.new({from: accounts[3]});
		const uintxZ3JZf = BigInt("436")
		const addresswgmyv5F = accounts[4]
		const addressvXKjS1 = accounts[3]
		const addressn2fv2G = accounts[4]
		const addressbwdTzyj = accounts[2]
		const addressJ7PCzLV = accounts[5]
		const addressv03btyK = accounts[2]
		const boolSELpnVg = await MIMOTokenAoONzfW.transferFrom.call(addressvXKjS1, addresswgmyv5F, uintxZ3JZf, {from: accounts[3]});
		const uintD2godTF = await MIMOTokenAoONzfW.allowance.call(addressbwdTzyj, addressn2fv2G, {from: accounts[4]});
		const uintt5Ulxvu = await MIMOTokenAoONzfW.allowance.call(addressv03btyK, addressJ7PCzLV, {from: accounts[3]});

		await expect(MIMOTokenAoONzfW.transferFrom.call(addressvXKjS1, addresswgmyv5F, uintxZ3JZf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenI5z3pwn = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcEJcd5 = BigInt("1660")
		const addressHmTud41 = accounts[4]
		const uint256jLzv5eT = await MIMOTokenI5z3pwn.setMinFee.call(uintcEJcd5, {from: accounts[3]});
		const uintLDjDqLd = await MIMOTokenI5z3pwn.totalSupply.call({from: accounts[1]});
		const uintBdvqFPH = await MIMOTokenI5z3pwn.balanceOf.call(addressHmTud41, {from: accounts[5]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenhSrHMMi = await MIMOToken.new({from: accounts[2]});
		const uintksChlge = BigInt("1358")
		const addressWK5C2ui = accounts[5]
		const addressDlzhzj7 = accounts[5]
		const addressRwS1YLA = accounts[3]
		const uint256LBT1f1w = await MIMOTokenhSrHMMi.getFee.call(uintksChlge, {from: accounts[2]});
		const uintv30augT = await MIMOTokenhSrHMMi.totalSupply.call({from: accounts[5]});
		const uintuoIYHDc = await MIMOTokenhSrHMMi.allowance.call(addressDlzhzj7, addressWK5C2ui, {from: accounts[4]});
		const uintDiGsNMt = await MIMOTokenhSrHMMi.balanceOf.call(addressRwS1YLA, {from: accounts[4]});

		assert.equal(uint256LBT1f1w, BigInt("50000000000000000"))
		assert.equal(uintDiGsNMt, BigInt("0"))
		assert.equal(uintuoIYHDc, BigInt("0"))
		assert.equal(uintv30augT, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenxPctpJL = await MIMOToken.new({from: accounts[4]});
		const uintamZ33m8 = BigInt("662")
		const addressvc2wfz = "0x0000000000000000000000000000000000000000"
		const uintHzaQlE = BigInt("1427")
		const addressregePE = accounts[5]
		const boolwgmDXlA = await MIMOTokenxPctpJL.transfer.call(addressvc2wfz, uintamZ33m8, {from: accounts[3]});
		const booloywZ1Rs = await MIMOTokenxPctpJL.transfer.call(addressregePE, uintHzaQlE, {from: accounts[0]});

		await expect(MIMOTokenxPctpJL.transfer.call(addressvc2wfz, uintamZ33m8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenjlvgulE = await MIMOToken.new({from: accounts[0]});
		const addressmXJyYQR = accounts[1]
		const addressDsodBV3 = "0x0000000000000000000000000000000000000001"
		const uintKLINAIK = BigInt("213")
		const addressL0jGMqx = accounts[2]
		const uintwgEDxDp = BigInt("600")
		const uintwrR6zj = BigInt("1540")
		const addressEMiGzOs = accounts[3]
		const uintTd6ibcA = await MIMOTokenjlvgulE.allowance.call(addressDsodBV3, addressmXJyYQR, {from: "0x0000000000000000000000000000000000000001"});
		const boolpwio0Rr = await MIMOTokenjlvgulE.approve.call(addressL0jGMqx, uintKLINAIK, {from: accounts[2]});
		const uint256enVesnI = await MIMOTokenjlvgulE.setFeeRate.call(uintwgEDxDp, {from: accounts[4]});
		const uint256yLOyxNz = await MIMOTokenjlvgulE.setMinFee.call(uintwrR6zj, {from: accounts[0]});
		const uintId2tg5u = await MIMOTokenjlvgulE.balanceOf.call(addressEMiGzOs, {from: accounts[0]});

		assert.equal(boolpwio0Rr, true)
		assert.equal(uintId2tg5u, BigInt("0"))
		assert.equal(uintTd6ibcA, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenAoONzfW = await MIMOToken.new({from: accounts[3]});
		const addressWdU6bbM = accounts[5]
		const addressAyOGmV = accounts[1]
		const uintsWQVObD = BigInt("1516")
		const address3oGvBY = "0x0000000000000000000000000000000000000000"
		const uintiwV8zM8 = BigInt("1524")
		const addressOs2vOiS = "0x0000000000000000000000000000000000000001"
		const addressL6BsMGM = accounts[1]
		const uintKoErkEb = await MIMOTokenAoONzfW.allowance.call(addressAyOGmV, addressWdU6bbM, {from: accounts[4]});
		const boolYi46rtX = await MIMOTokenAoONzfW.approve.call(address3oGvBY, uintsWQVObD, {from: accounts[4]});
		const boolyV7MKt0 = await MIMOTokenAoONzfW.transferFrom.call(addressL6BsMGM, addressOs2vOiS, uintiwV8zM8, {from: accounts[1]});

		assert.equal(uintKoErkEb, BigInt("0"))
		await expect(MIMOTokenAoONzfW.approve.call(address3oGvBY, uintsWQVObD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})