const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractJtfilq = await ERC721.new({from: accounts[2]});
		const tokenIdeyryV3b = BigInt("1237")
		const toMOuc8Y = "0x0000000000000000000000000000000000000001"
		const fromJ9fIgYq = accounts[2]
		const tokenIdReinU35 = BigInt("1544")
		const torOKTq8T = accounts[4]
		const fromRW9BnS = accounts[2]
		const tokenIdAPAVq2e = BigInt("1197")
		const tokenIdqp3rfTw = BigInt("1078")
		const toZC6EutZ = accounts[4]
		const from4piqnw = accounts[3]
		await contractJtfilq.safeTransferFrom.call(fromJ9fIgYq, toMOuc8Y, tokenIdeyryV3b, {from: accounts[3]});
		await contractJtfilq.safeTransferFrom.call(fromRW9BnS, torOKTq8T, tokenIdReinU35, {from: accounts[4]});
		const nulldG3PCqR = await contractJtfilq.getApproved.call(tokenIdAPAVq2e, {from: accounts[3]});
		await contractJtfilq.transferFrom.call(from4piqnw, toZC6EutZ, tokenIdqp3rfTw, {from: accounts[2]});

		await expect(contractJtfilq.safeTransferFrom.call(fromJ9fIgYq, toMOuc8Y, tokenIdeyryV3b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractitkugcu = await ERC721.new({from: accounts[2]});
		const tokenIdzHrWJBc = BigInt("1354")
		const tozAsJS3d = accounts[3]
		const tokenIdqu54NQg = BigInt("1973")
		const toy0JfHrO = accounts[3]
		const fromKcEDFfK = accounts[3]
		const ownerNbCycPZ = accounts[4]
		await contractitkugcu.approve.call(tozAsJS3d, tokenIdzHrWJBc, {from: accounts[0]});
		await contractitkugcu.safeTransferFrom.call(fromKcEDFfK, toy0JfHrO, tokenIdqu54NQg, {from: accounts[2]});
		const nulleou1HGw = await contractitkugcu.balanceOf.call(ownerNbCycPZ, {from: accounts[3]});

		await expect(contractitkugcu.approve.call(tozAsJS3d, tokenIdzHrWJBc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractBgBzk9j = await ERC721.new({from: accounts[2]});
		const tokenIdMARPF4U = BigInt("104")
		const toppYejrP = accounts[0]
		const fromp8E48gC = accounts[0]
		const tokenIdTUMjmKY = BigInt("173")
		const toNszVazi = accounts[4]
		const fromBPRvUdU = accounts[1]
		const tokenIdoNe1UGR = BigInt("913")
		const tor9RBtuk = accounts[1]
		const fromxW5P1Do = accounts[0]
		await contractBgBzk9j.transferFrom.call(fromp8E48gC, toppYejrP, tokenIdMARPF4U, {from: "0x0000000000000000000000000000000000000001"});
		await contractBgBzk9j.transferFrom.call(fromBPRvUdU, toNszVazi, tokenIdTUMjmKY, {from: "0x0000000000000000000000000000000000000001"});
		await contractBgBzk9j.safeTransferFrom.call(fromxW5P1Do, tor9RBtuk, tokenIdoNe1UGR, {from: accounts[5]});

		await expect(contractBgBzk9j.transferFrom.call(fromp8E48gC, toppYejrP, tokenIdMARPF4U, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracthNFLm25 = await ERC721.new({from: accounts[1]});
		const approvedHOEcoLu = true
		const tooHhah58 = accounts[2]
		const approvedfPh9an = false
		const toItTW1l = accounts[0]
		const ownerGpiWjQF = accounts[5]
		const approvedSIe2ezR = true
		const tobM1g3yo = accounts[3]
		const operatoreEFHGW3 = "0x0000000000000000000000000000000000000001"
		const ownerfZ3Q7kk = accounts[0]
		await contracthNFLm25.setApprovalForAll.call(tooHhah58, approvedHOEcoLu, {from: accounts[0]});
		await contracthNFLm25.setApprovalForAll.call(toItTW1l, approvedfPh9an, {from: accounts[4]});
		const nullQNeEYW = await contracthNFLm25.balanceOf.call(ownerGpiWjQF, {from: accounts[1]});
		await contracthNFLm25.setApprovalForAll.call(tobM1g3yo, approvedSIe2ezR, {from: accounts[5]});
		const nullCq8peBJ = await contracthNFLm25.isApprovedForAll.call(ownerfZ3Q7kk, operatoreEFHGW3, {from: accounts[3]});

		assert.equal(nullCq8peBJ, false)
		assert.equal(nullQNeEYW, 0)
	});

	it('test for ERC721', async () => {
		const contractiY4oaFu = await ERC721.new({from: accounts[3]});
		const tokenIdhSX1Lrz = BigInt("2028")
		const tokenIdUmkDyIX = BigInt("547")
		const tojg61MFK = accounts[2]
		const fromSA9QZVc = accounts[3]
		const tokenIdQsvoP9 = BigInt("1673")
		const tow948Qiu = accounts[1]
		const approveds8jUvo = true
		const towhIAytV = accounts[2]
		const tokenIdbqqQOjm = BigInt("310")
		const tonJr12bj = accounts[2]
		const fromdg3K66s = accounts[2]
		const tokenIdpR5tDk1 = BigInt("1389")
		const toUQvXn05 = accounts[1]
		const fromzuetySi = "0x0000000000000000000000000000000000000001"
		const nullyGzFM7I = await contractiY4oaFu.getApproved.call(tokenIdhSX1Lrz, {from: accounts[4]});
		await contractiY4oaFu.transferFrom.call(fromSA9QZVc, tojg61MFK, tokenIdUmkDyIX, {from: accounts[0]});
		await contractiY4oaFu.approve.call(tow948Qiu, tokenIdQsvoP9, {from: accounts[3]});
		await contractiY4oaFu.setApprovalForAll.call(towhIAytV, approveds8jUvo, {from: accounts[2]});
		await contractiY4oaFu.transferFrom.call(fromdg3K66s, tonJr12bj, tokenIdbqqQOjm, {from: "0x0000000000000000000000000000000000000001"});
		await contractiY4oaFu.safeTransferFrom.call(fromzuetySi, toUQvXn05, tokenIdpR5tDk1, {from: accounts[3]});

		await expect(contractiY4oaFu.getApproved.call(tokenIdhSX1Lrz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractyAQGF4R = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdy8DpAUb = BigInt("1428")
		const tokenIdSb9WakV = BigInt("627")
		const tokenIde58URc1 = BigInt("1880")
		const tokenIdtqpfXLf = BigInt("671")
		const nullLJoHBaV = await contractyAQGF4R.ownerOf.call(tokenIdy8DpAUb, {from: accounts[2]});
		const nullWm2bed = await contractyAQGF4R.ownerOf.call(tokenIdSb9WakV, {from: accounts[5]});
		const nulltykVgUe = await contractyAQGF4R.getApproved.call(tokenIde58URc1, {from: accounts[4]});
		const nullRY5IijC = await contractyAQGF4R.ownerOf.call(tokenIdtqpfXLf, {from: accounts[2]});
	});

	it('test for ERC721', async () => {
		const contractnisyvi = await ERC721.new({from: accounts[2]});
		const approvedvpCf31n = false
		const toLMC3rDy = accounts[0]
		const operatorWnNII5n = accounts[1]
		const ownerifh36Xl = "0x0000000000000000000000000000000000000001"
		const approvedriW76N8 = true
		const toXC7meQ5 = accounts[1]
		const tokenIdRgJqOCY = BigInt("625")
		const toLaVXYhe = accounts[0]
		await contractnisyvi.setApprovalForAll.call(toLMC3rDy, approvedvpCf31n, {from: accounts[0]});
		const nullpCDF2NH = await contractnisyvi.isApprovedForAll.call(ownerifh36Xl, operatorWnNII5n, {from: "0x0000000000000000000000000000000000000001"});
		await contractnisyvi.setApprovalForAll.call(toXC7meQ5, approvedriW76N8, {from: accounts[5]});
		await contractnisyvi.approve.call(toLaVXYhe, tokenIdRgJqOCY, {from: accounts[0]});

		await expect(contractnisyvi.setApprovalForAll.call(toLMC3rDy, approvedvpCf31n, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})