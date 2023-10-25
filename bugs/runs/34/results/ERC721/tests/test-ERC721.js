const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractETIHrCi = await ERC721.new({from: accounts[4]});
		const tokenIdpv5wXsl = BigInt("127")
		const tokenIdVRQSHQ8 = BigInt("63")
		const tokenIdVmHgHP = BigInt("1144")
		const toKEqNYi = "0x0000000000000000000000000000000000000001"
		const operatorYw3bjFr = accounts[1]
		const ownerwRbWISH = accounts[1]
		const approvedjN7QkI2 = false
		const toEars9Kk = accounts[1]
		const tokenIdTgLnDef = BigInt("1553")
		const nullEEaW5Ts = await contractETIHrCi.ownerOf.call(tokenIdpv5wXsl, {from: accounts[4]});
		const nullWQg8G41 = await contractETIHrCi.ownerOf.call(tokenIdVRQSHQ8, {from: "0x0000000000000000000000000000000000000001"});
		await contractETIHrCi.approve.call(toKEqNYi, tokenIdVmHgHP, {from: accounts[1]});
		const nullK1Dqlx2 = await contractETIHrCi.isApprovedForAll.call(ownerwRbWISH, operatorYw3bjFr, {from: accounts[4]});
		await contractETIHrCi.setApprovalForAll.call(toEars9Kk, approvedjN7QkI2, {from: accounts[0]});
		const nullJmdXja = await contractETIHrCi.getApproved.call(tokenIdTgLnDef, {from: accounts[5]});

		await expect(contractETIHrCi.ownerOf.call(tokenIdpv5wXsl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractgm92RVH = await ERC721.new({from: accounts[0]});
		const approvedg3DgEm4 = true
		const toOYJAoad = accounts[1]
		const approvedpICUzFy = false
		const toUXJo26Y = accounts[4]
		const tokenIdiP3c1iq = BigInt("1669")
		const tokenIdwjbCKY = BigInt("2006")
		const tonpWbwSQ = accounts[2]
		const fromEzqWDpl = accounts[0]
		await contractgm92RVH.setApprovalForAll.call(toOYJAoad, approvedg3DgEm4, {from: accounts[4]});
		await contractgm92RVH.setApprovalForAll.call(toUXJo26Y, approvedpICUzFy, {from: accounts[5]});
		const nullkoVLQ0E = await contractgm92RVH.ownerOf.call(tokenIdiP3c1iq, {from: accounts[1]});
		await contractgm92RVH.transferFrom.call(fromEzqWDpl, tonpWbwSQ, tokenIdwjbCKY, {from: accounts[0]});

		await expect(contractgm92RVH.setApprovalForAll.call(toOYJAoad, approvedg3DgEm4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractnYvE3CC = await ERC721.new({from: accounts[1]});
		const tokenIdwMtIyJ = BigInt("429")
		const tol08k9Ym = accounts[4]
		const fromqmOtVfI = accounts[3]
		const _dataZYDYC4N = "0x0401170f17111a1e000a03"
		const tokenIdhVy0DS1 = BigInt("1771")
		const tobTlJjT = accounts[4]
		const fromOm2bsz4 = accounts[3]
		const approvedNgCAQDm = true
		const tomOi4yX = accounts[3]
		const approvedBl7P5LN = true
		const toTJK6lZh = accounts[4]
		const tokenIdjYwwJv = BigInt("222")
		const owneryYs9DXC = accounts[5]
		await contractnYvE3CC.safeTransferFrom.call(fromqmOtVfI, tol08k9Ym, tokenIdwMtIyJ, {from: accounts[1]});
		await contractnYvE3CC.safeTransferFrom.call(fromOm2bsz4, tobTlJjT, tokenIdhVy0DS1, _dataZYDYC4N, {from: accounts[5]});
		await contractnYvE3CC.setApprovalForAll.call(tomOi4yX, approvedNgCAQDm, {from: accounts[0]});
		await contractnYvE3CC.setApprovalForAll.call(toTJK6lZh, approvedBl7P5LN, {from: accounts[4]});
		const nulliUT9SLn = await contractnYvE3CC.getApproved.call(tokenIdjYwwJv, {from: accounts[0]});
		const nulldPEknHj = await contractnYvE3CC.balanceOf.call(owneryYs9DXC, {from: accounts[0]});

		await expect(contractnYvE3CC.safeTransferFrom.call(fromqmOtVfI, tol08k9Ym, tokenIdwMtIyJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractMLumlQB = await ERC721.new({from: accounts[0]});
		const tokenIdmXL7WTY = BigInt("1808")
		const tos35uTE = accounts[2]
		const fromxbbDpvd = accounts[0]
		const tokenIdBpFzcv = BigInt("1518")
		const torVkzAyn = accounts[1]
		const fromDdi7dyv = accounts[1]
		const tokenIdBnOdbaE = BigInt("808")
		const tomq6oaN = accounts[3]
		const approvedrxmkv8X = false
		const toi57KJMM = accounts[1]
		await contractMLumlQB.transferFrom.call(fromxbbDpvd, tos35uTE, tokenIdmXL7WTY, {from: accounts[0]});
		await contractMLumlQB.safeTransferFrom.call(fromDdi7dyv, torVkzAyn, tokenIdBpFzcv, {from: accounts[1]});
		await contractMLumlQB.approve.call(tomq6oaN, tokenIdBnOdbaE, {from: accounts[2]});
		await contractMLumlQB.setApprovalForAll.call(toi57KJMM, approvedrxmkv8X, {from: accounts[3]});

		await expect(contractMLumlQB.transferFrom.call(fromxbbDpvd, tos35uTE, tokenIdmXL7WTY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contract7BzJgN = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdGssfq1 = BigInt("631")
		const tokenIdU24CPTt = BigInt("116")
		const tozkkV0Ty = accounts[0]
		const fromCiIHU6n = accounts[4]
		const operatorpj0qx3J = "0x0000000000000000000000000000000000000001"
		const ownerjgkBIcW = accounts[2]
		const nullZoIQ2qQ = await contract7BzJgN.ownerOf.call(tokenIdGssfq1, {from: accounts[3]});
		await contract7BzJgN.transferFrom.call(fromCiIHU6n, tozkkV0Ty, tokenIdU24CPTt, {from: accounts[0]});
		const nulliDQbRsS = await contract7BzJgN.isApprovedForAll.call(ownerjgkBIcW, operatorpj0qx3J, {from: accounts[0]});
	});

	it('test for ERC721', async () => {
		const contractp2jvC5l = await ERC721.new({from: accounts[0]});
		const tokenIdqMvfjTl = BigInt("1126")
		const toXpvFQrB = accounts[1]
		const tokenIde6A2f8l = BigInt("471")
		const tokenIdWY3QVL5 = BigInt("52")
		const tokenIdg4ElEsD = BigInt("1144")
		const approvedXrGaNZM = true
		const toSoEleIH = "0x0000000000000000000000000000000000000001"
		const _dataYdAsh98 = "0x1c14011f1f11150d0b12111d10"
		const tokenIdm8aAMm = BigInt("122")
		const todJuh35 = "0x0000000000000000000000000000000000000001"
		const fromB3RxjoK = "0x0000000000000000000000000000000000000001"
		await contractp2jvC5l.approve.call(toXpvFQrB, tokenIdqMvfjTl, {from: accounts[5]});
		const nullFLQtyxA = await contractp2jvC5l.ownerOf.call(tokenIde6A2f8l, {from: accounts[5]});
		const nullTAfCVqb = await contractp2jvC5l.ownerOf.call(tokenIdWY3QVL5, {from: accounts[0]});
		const nullQFB3f7N = await contractp2jvC5l.getApproved.call(tokenIdg4ElEsD, {from: accounts[5]});
		await contractp2jvC5l.setApprovalForAll.call(toSoEleIH, approvedXrGaNZM, {from: accounts[3]});
		await contractp2jvC5l.safeTransferFrom.call(fromB3RxjoK, todJuh35, tokenIdm8aAMm, _dataYdAsh98, {from: accounts[3]});

		await expect(contractp2jvC5l.approve.call(toXpvFQrB, tokenIdqMvfjTl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractINwsZrk = await ERC721.new({from: accounts[0]});
		const tokenIdN76tCFw = BigInt("1983")
		const tokenIdfddlue = BigInt("1231")
		const tow8jdAEQ = accounts[5]
		const fromVf5fllQ = accounts[0]
		const tokenId7ylXkk = BigInt("1586")
		const operatorQfmN8lR = accounts[3]
		const ownerUKc179l = accounts[5]
		const nullahiVQwD = await contractINwsZrk.getApproved.call(tokenIdN76tCFw, {from: accounts[0]});
		await contractINwsZrk.safeTransferFrom.call(fromVf5fllQ, tow8jdAEQ, tokenIdfddlue, {from: "0x0000000000000000000000000000000000000001"});
		const nullbMWnPt = await contractINwsZrk.ownerOf.call(tokenId7ylXkk, {from: accounts[3]});
		const nulldz0jufS = await contractINwsZrk.isApprovedForAll.call(ownerUKc179l, operatorQfmN8lR, {from: accounts[1]});

		await expect(contractINwsZrk.getApproved.call(tokenIdN76tCFw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractPlhOEXy = await ERC721.new({from: accounts[0]});
		const approvedXREvnQy = false
		const toM5S3uc5 = accounts[0]
		const operatorN1LpYqy = accounts[1]
		const ownerbIsiDxn = "0x0000000000000000000000000000000000000001"
		const tokenIddW2MyM4 = BigInt("41")
		const topKG1gt7 = accounts[2]
		const fromWHemgU = accounts[4]
		await contractPlhOEXy.setApprovalForAll.call(toM5S3uc5, approvedXREvnQy, {from: accounts[1]});
		const nullWsuR9B = await contractPlhOEXy.isApprovedForAll.call(ownerbIsiDxn, operatorN1LpYqy, {from: "0x0000000000000000000000000000000000000001"});
		await contractPlhOEXy.transferFrom.call(fromWHemgU, topKG1gt7, tokenIddW2MyM4, {from: accounts[0]});

		assert.equal(nullWsuR9B, false)
		await expect(contractPlhOEXy.isApprovedForAll.call(ownerbIsiDxn, operatorN1LpYqy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractL2IZdvs = await ERC721.new({from: accounts[0]});
		const ownerRX2nFZI = accounts[3]
		const tokenIdVi9bJo = BigInt("114")
		const toQ8fif0B = "0x0000000000000000000000000000000000000001"
		const froms5hB6rm = accounts[5]
		const tokenIdcI0meWX = BigInt("1134")
		const toz9QE5HP = accounts[3]
		const approvedTGjwPC1 = true
		const toYmXLXhS = accounts[2]
		const approvedmB5lXg = true
		const tobAXDutq = accounts[0]
		const approvedmTdHn9z = true
		const to9VIqPl = accounts[3]
		const approvedVNedLRX = false
		const tof2aBQFa = accounts[2]
		const tokenId6DRKgx = BigInt("187")
		const toosu6rm2 = accounts[3]
		const fromcoRNrmj = accounts[2]
		const nulljm1wSY3 = await contractL2IZdvs.balanceOf.call(ownerRX2nFZI, {from: accounts[2]});
		await contractL2IZdvs.transferFrom.call(froms5hB6rm, toQ8fif0B, tokenIdVi9bJo, {from: accounts[1]});
		await contractL2IZdvs.approve.call(toz9QE5HP, tokenIdcI0meWX, {from: "0x0000000000000000000000000000000000000001"});
		await contractL2IZdvs.setApprovalForAll.call(toYmXLXhS, approvedTGjwPC1, {from: accounts[0]});
		await contractL2IZdvs.setApprovalForAll.call(tobAXDutq, approvedmB5lXg, {from: "0x0000000000000000000000000000000000000001"});
		await contractL2IZdvs.setApprovalForAll.call(to9VIqPl, approvedmTdHn9z, {from: accounts[4]});
		await contractL2IZdvs.setApprovalForAll.call(tof2aBQFa, approvedVNedLRX, {from: "0x0000000000000000000000000000000000000001"});
		await contractL2IZdvs.safeTransferFrom.call(fromcoRNrmj, toosu6rm2, tokenId6DRKgx, {from: accounts[1]});

		assert.equal(nulljm1wSY3, 0)
		await expect(contractL2IZdvs.transferFrom.call(froms5hB6rm, toQ8fif0B, tokenIdVi9bJo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractKhcZAQL = await ERC721.new({from: accounts[3]});
		const approvedBLQcxQV = true
		const top01ZL8k = accounts[0]
		const tokenIdsWpuoan = BigInt("161")
		const tosRoa3ax = accounts[0]
		const frombheQSYD = "0x0000000000000000000000000000000000000001"
		const tokenIdj7F1kNx = BigInt("1008")
		const _datacOtrCtk = "0x0506140702061c0805051f190119200b14041e090c05"
		const tokenIdTgJST99 = BigInt("114")
		const tojVHyUyw = accounts[3]
		const fromf3kD5tx = "0x0000000000000000000000000000000000000001"
		const _data3yHewt = "0x01131a0c16160a091e0d1b"
		const tokenIdmS8Jzw = BigInt("988")
		const totpLZCxR = accounts[0]
		const fromckg2R2R = accounts[0]
		await contractKhcZAQL.setApprovalForAll.call(top01ZL8k, approvedBLQcxQV, {from: accounts[0]});
		await contractKhcZAQL.transferFrom.call(frombheQSYD, tosRoa3ax, tokenIdsWpuoan, {from: accounts[4]});
		const nullxxNyTPG = await contractKhcZAQL.getApproved.call(tokenIdj7F1kNx, {from: accounts[5]});
		await contractKhcZAQL.safeTransferFrom.call(fromf3kD5tx, tojVHyUyw, tokenIdTgJST99, _datacOtrCtk, {from: accounts[1]});
		await contractKhcZAQL.safeTransferFrom.call(fromckg2R2R, totpLZCxR, tokenIdmS8Jzw, _data3yHewt, {from: accounts[1]});

		await expect(contractKhcZAQL.setApprovalForAll.call(top01ZL8k, approvedBLQcxQV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})