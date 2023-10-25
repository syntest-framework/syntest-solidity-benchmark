const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractR9E2zJE = await ERC721.new({from: accounts[5]});
		const tokenIdvnr4yKs = BigInt("436")
		const tokenIdwpCxbdb = BigInt("894")
		const approvedXwz3mV6 = true
		const toCLid81 = accounts[4]
		const tokenIdBIj6YpR = BigInt("617")
		const toWZnEYp = "0x0000000000000000000000000000000000000001"
		const fromY3O4NPk = accounts[2]
		const operatorQufY96z = accounts[0]
		const ownerp7pBtJf = accounts[5]
		const nullm0xNjsx = await contractR9E2zJE.ownerOf.call(tokenIdvnr4yKs, {from: "0x0000000000000000000000000000000000000001"});
		const nulldgkgGLR = await contractR9E2zJE.ownerOf.call(tokenIdwpCxbdb, {from: "0x0000000000000000000000000000000000000001"});
		await contractR9E2zJE.setApprovalForAll.call(toCLid81, approvedXwz3mV6, {from: accounts[2]});
		await contractR9E2zJE.transferFrom.call(fromY3O4NPk, toWZnEYp, tokenIdBIj6YpR, {from: "0x0000000000000000000000000000000000000001"});
		const nullYr5GL5q = await contractR9E2zJE.isApprovedForAll.call(ownerp7pBtJf, operatorQufY96z, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractR9E2zJE.ownerOf.call(tokenIdvnr4yKs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractLD5CCgV = await ERC721.new({from: accounts[1]});
		const tokenIdwfA7TPD = BigInt("1336")
		const toSmr4Mr = accounts[1]
		const fromnZFcZnL = accounts[5]
		const ownergXQlxk7 = accounts[2]
		const tokenIdEawOawK = BigInt("1890")
		const topLHjT6K = accounts[2]
		const fromu76p9KK = accounts[4]
		const tokenIdnSqIZnq = BigInt("712")
		const _databtlkcq8 = "0x0e0a040f0017060a1f11131515101a15050f1718030a12120a010b1c1e"
		const tokenIdlVJmy1R = BigInt("1529")
		const toYllJGkL = accounts[3]
		const fromSEn1Bw9 = accounts[0]
		await contractLD5CCgV.safeTransferFrom.call(fromnZFcZnL, toSmr4Mr, tokenIdwfA7TPD, {from: accounts[0]});
		const nullARbkvrm = await contractLD5CCgV.balanceOf.call(ownergXQlxk7, {from: accounts[5]});
		await contractLD5CCgV.safeTransferFrom.call(fromu76p9KK, topLHjT6K, tokenIdEawOawK, {from: accounts[2]});
		const nullg3TtuTk = await contractLD5CCgV.getApproved.call(tokenIdnSqIZnq, {from: accounts[2]});
		await contractLD5CCgV.safeTransferFrom.call(fromSEn1Bw9, toYllJGkL, tokenIdlVJmy1R, _databtlkcq8, {from: accounts[0]});

		await expect(contractLD5CCgV.safeTransferFrom.call(fromnZFcZnL, toSmr4Mr, tokenIdwfA7TPD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractYN8fMfR = await ERC721.new({from: accounts[0]});
		const tokenIdYaVAqIE = BigInt("1156")
		const toXFA6wfh = accounts[2]
		const fromox2vTr2 = accounts[0]
		const tokenIdj9hRWSG = BigInt("1149")
		const toRPItsvU = accounts[1]
		const fromypdvdNz = "0x0000000000000000000000000000000000000001"
		const _dataXh8mqim = "0x191b1f0d1c071b030c0b12180c0d1c141e16200513161c02020d0c05181b0c00"
		const tokenIdWIJ2txG = BigInt("1200")
		const toZQ0cDxy = accounts[0]
		const fromSng23BI = accounts[2]
		await contractYN8fMfR.transferFrom.call(fromox2vTr2, toXFA6wfh, tokenIdYaVAqIE, {from: accounts[1]});
		await contractYN8fMfR.transferFrom.call(fromypdvdNz, toRPItsvU, tokenIdj9hRWSG, {from: accounts[2]});
		await contractYN8fMfR.safeTransferFrom.call(fromSng23BI, toZQ0cDxy, tokenIdWIJ2txG, _dataXh8mqim, {from: accounts[4]});

		await expect(contractYN8fMfR.transferFrom.call(fromox2vTr2, toXFA6wfh, tokenIdYaVAqIE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractVSHsb5b = await ERC721.new({from: accounts[2]});
		const operatormWWvz9u = accounts[1]
		const ownerJOu4Scm = accounts[3]
		const tokenIdEmXkMRt = BigInt("842")
		const toKi3Ympg = accounts[4]
		const fromtuCn034 = accounts[3]
		const tokenIdXfUd5E8 = BigInt("508")
		const tomDx7LOr = accounts[4]
		const approvedjc6DcKM = false
		const toDJfnuT2 = accounts[3]
		const owner9vZgyG = accounts[2]
		const nullG3FVQYg = await contractVSHsb5b.isApprovedForAll.call(ownerJOu4Scm, operatormWWvz9u, {from: accounts[2]});
		await contractVSHsb5b.safeTransferFrom.call(fromtuCn034, toKi3Ympg, tokenIdEmXkMRt, {from: accounts[0]});
		await contractVSHsb5b.approve.call(tomDx7LOr, tokenIdXfUd5E8, {from: accounts[0]});
		await contractVSHsb5b.setApprovalForAll.call(toDJfnuT2, approvedjc6DcKM, {from: accounts[1]});
		const nullhdHF82 = await contractVSHsb5b.balanceOf.call(owner9vZgyG, {from: accounts[1]});

		assert.equal(nullG3FVQYg, false)
		await expect(contractVSHsb5b.safeTransferFrom.call(fromtuCn034, toKi3Ympg, tokenIdEmXkMRt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractLkElx66 = await ERC721.new({from: accounts[2]});
		const tokenIdc1qGnn = BigInt("946")
		const tokenIdZAYRAnU = BigInt("447")
		const toU6EIWgi = accounts[0]
		const tokenIdVh5BLWn = BigInt("48")
		const toq2KBz5o = accounts[3]
		const tokenIdouf3feR = BigInt("106")
		const tokenIdN9sSItb = BigInt("1874")
		const toTZIXUVB = accounts[2]
		const tokenIdeIlZYcd = BigInt("539")
		const toEc6gIGZ = accounts[3]
		const frommX1oIkH = accounts[5]
		const nullJey7Hgw = await contractLkElx66.getApproved.call(tokenIdc1qGnn, {from: "0x0000000000000000000000000000000000000001"});
		await contractLkElx66.approve.call(toU6EIWgi, tokenIdZAYRAnU, {from: accounts[4]});
		await contractLkElx66.approve.call(toq2KBz5o, tokenIdVh5BLWn, {from: accounts[0]});
		const nullrEyn2x = await contractLkElx66.getApproved.call(tokenIdouf3feR, {from: accounts[4]});
		await contractLkElx66.approve.call(toTZIXUVB, tokenIdN9sSItb, {from: accounts[2]});
		await contractLkElx66.transferFrom.call(frommX1oIkH, toEc6gIGZ, tokenIdeIlZYcd, {from: accounts[1]});

		await expect(contractLkElx66.getApproved.call(tokenIdc1qGnn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracto7H2R6U = await ERC721.new({from: accounts[0]});
		const tokenIdOkfZV9J = BigInt("1688")
		const toIsq0Ep5 = accounts[3]
		const tokenIdsa3Nea = BigInt("1156")
		const toujMckec = accounts[2]
		const fromyy84AEw = accounts[0]
		const tokenIdiPH17cu = BigInt("1149")
		const topkLeRh8 = accounts[2]
		const fromUSuR46F = "0x0000000000000000000000000000000000000001"
		const _datand0JX7w = "0x191b1f0d1c071b030c0b12180c0d1c141e16200513161c02020d0c05181b0c00"
		const tokenIdlstTksk = BigInt("1200")
		const toRGA8r7R = accounts[0]
		const frompZQIMXu = accounts[2]
		const tokenId88towN = BigInt("568")
		const tobCXSaL = accounts[4]
		const tokenIdeWYX0Ys = BigInt("817")
		const towvtIBro = accounts[0]
		const fromQYHWdHB = accounts[4]
		await contracto7H2R6U.approve.call(toIsq0Ep5, tokenIdOkfZV9J, {from: accounts[4]});
		await contracto7H2R6U.transferFrom.call(fromyy84AEw, toujMckec, tokenIdsa3Nea, {from: accounts[1]});
		await contracto7H2R6U.transferFrom.call(fromUSuR46F, topkLeRh8, tokenIdiPH17cu, {from: accounts[2]});
		await contracto7H2R6U.safeTransferFrom.call(frompZQIMXu, toRGA8r7R, tokenIdlstTksk, _datand0JX7w, {from: accounts[4]});
		await contracto7H2R6U.approve.call(tobCXSaL, tokenId88towN, {from: accounts[0]});
		await contracto7H2R6U.transferFrom.call(fromQYHWdHB, towvtIBro, tokenIdeWYX0Ys, {from: accounts[3]});

		await expect(contracto7H2R6U.approve.call(toIsq0Ep5, tokenIdOkfZV9J, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractzjObOt1 = await ERC721.new({from: accounts[4]});
		const approvedNPEMVGA = true
		const toQf35QH = accounts[1]
		const operatorytP8oEM = accounts[1]
		const ownerVwmKslT = accounts[2]
		const tokenIdpYYxy0L = BigInt("1471")
		const operatorV0nPE1B = accounts[1]
		const ownermumYxmW = accounts[4]
		const tokenIdZT0V0bp = BigInt("1060")
		const toS9Xjf0G = accounts[1]
		const fromCWeD44H = accounts[1]
		const operatorZKcjKWb = accounts[2]
		const ownerFCJJUk2 = accounts[4]
		await contractzjObOt1.setApprovalForAll.call(toQf35QH, approvedNPEMVGA, {from: accounts[2]});
		const nullOr3n9C1 = await contractzjObOt1.isApprovedForAll.call(ownerVwmKslT, operatorytP8oEM, {from: accounts[0]});
		const nullZEQGwt5 = await contractzjObOt1.getApproved.call(tokenIdpYYxy0L, {from: accounts[2]});
		const nullb3GwxgR = await contractzjObOt1.isApprovedForAll.call(ownermumYxmW, operatorV0nPE1B, {from: accounts[1]});
		await contractzjObOt1.safeTransferFrom.call(fromCWeD44H, toS9Xjf0G, tokenIdZT0V0bp, {from: accounts[5]});
		const nulljAjXPKR = await contractzjObOt1.isApprovedForAll.call(ownerFCJJUk2, operatorZKcjKWb, {from: accounts[3]});

		assert.equal(nullOr3n9C1, false)
		await expect(contractzjObOt1.isApprovedForAll.call(ownerVwmKslT, operatorytP8oEM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractXE892wX = await ERC721.new({from: accounts[1]});
		const ownerSykI65d = accounts[2]
		const tokenIdhnmbjmv = BigInt("1890")
		const togLFAqoT = accounts[2]
		const frompBbbytd = accounts[4]
		const tokenIdjEeoVqf = BigInt("1763")
		const _databaFIft6 = "0x0e0a040f0017060a1f11131515101a15050f1718030a12120a010b1c1e"
		const tokenIdC4xoaOb = BigInt("1529")
		const toOjskm4 = accounts[3]
		const fromvzjNcHy = accounts[0]
		const nullrA6Te8K = await contractXE892wX.balanceOf.call(ownerSykI65d, {from: accounts[5]});
		await contractXE892wX.safeTransferFrom.call(frompBbbytd, togLFAqoT, tokenIdhnmbjmv, {from: accounts[2]});
		const nullTEaF1Bb = await contractXE892wX.getApproved.call(tokenIdjEeoVqf, {from: accounts[2]});
		await contractXE892wX.safeTransferFrom.call(fromvzjNcHy, toOjskm4, tokenIdC4xoaOb, _databaFIft6, {from: accounts[0]});

		assert.equal(nullrA6Te8K, 0)
		await expect(contractXE892wX.safeTransferFrom.call(frompBbbytd, togLFAqoT, tokenIdhnmbjmv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracthS2rCox = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdVSXHDmC = BigInt("1893")
		const tosfqzAQ6 = "0x0000000000000000000000000000000000000001"
		const fromPzkLfEI = accounts[3]
		const approvedeDhvRwi = true
		const toriYiI3X = accounts[0]
		const tokenIdof8KOiP = BigInt("1758")
		await contracthS2rCox.transferFrom.call(fromPzkLfEI, tosfqzAQ6, tokenIdVSXHDmC, {from: accounts[0]});
		await contracthS2rCox.setApprovalForAll.call(toriYiI3X, approvedeDhvRwi, {from: accounts[2]});
		const nullaTt75rB = await contracthS2rCox.getApproved.call(tokenIdof8KOiP, {from: accounts[5]});
	});

	it('test for ERC721', async () => {
		const contractww1qo3 = await ERC721.new({from: accounts[0]});
		const approvedoc0oXz = false
		const to8wXtgB = accounts[4]
		const tokenIdIzLVIJd = BigInt("1156")
		const tom0C3eC = accounts[2]
		const fromSPWQzy = accounts[0]
		const approvedr36UKny = false
		const tolelR9bS = "0x0000000000000000000000000000000000000001"
		const tokenIdGc28E59 = BigInt("561")
		const _dataNdSIZFJ = "0x191b1f0d1c071b030c0b12180c0d1c141e16200513161c02020d0c05181b0c00"
		const tokenIdbFc4AwL = BigInt("1200")
		const tozWejieu = accounts[0]
		const fromefbu3w = accounts[2]
		await contractww1qo3.setApprovalForAll.call(to8wXtgB, approvedoc0oXz, {from: accounts[4]});
		await contractww1qo3.transferFrom.call(fromSPWQzy, tom0C3eC, tokenIdIzLVIJd, {from: accounts[1]});
		await contractww1qo3.setApprovalForAll.call(tolelR9bS, approvedr36UKny, {from: accounts[1]});
		const nullPivhcwb = await contractww1qo3.ownerOf.call(tokenIdGc28E59, {from: accounts[3]});
		await contractww1qo3.safeTransferFrom.call(fromefbu3w, tozWejieu, tokenIdbFc4AwL, _dataNdSIZFJ, {from: accounts[4]});

		await expect(contractww1qo3.setApprovalForAll.call(to8wXtgB, approvedoc0oXz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})