const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractTBcnvOF = await ERC721.new({from: accounts[0]});
		const approvedT39dYsk = true
		const toC6T8nOT = accounts[2]
		const tokenIdwRKjoWf = BigInt("1910")
		const toBLA5oP = accounts[0]
		const fromB6iyGZR = "0x0000000000000000000000000000000000000001"
		const operatordOaUfpR = accounts[0]
		const ownerrYexWDu = accounts[3]
		const tokenId5I71oK = BigInt("1089")
		const toMJUec71 = accounts[2]
		const fromWkqOjQn = accounts[2]
		const tokenIdac6SI7y = BigInt("1178")
		const tokenIdYDXuMYn = BigInt("872")
		const toNq75MBN = accounts[1]
		await contractTBcnvOF.setApprovalForAll.call(toC6T8nOT, approvedT39dYsk, {from: accounts[4]});
		await contractTBcnvOF.transferFrom.call(fromB6iyGZR, toBLA5oP, tokenIdwRKjoWf, {from: accounts[2]});
		const nulle3FuSOU = await contractTBcnvOF.isApprovedForAll.call(ownerrYexWDu, operatordOaUfpR, {from: accounts[5]});
		await contractTBcnvOF.safeTransferFrom.call(fromWkqOjQn, toMJUec71, tokenId5I71oK, {from: accounts[2]});
		const null9BiF6d = await contractTBcnvOF.ownerOf.call(tokenIdac6SI7y, {from: accounts[3]});
		await contractTBcnvOF.approve.call(toNq75MBN, tokenIdYDXuMYn, {from: accounts[2]});

		await expect(contractTBcnvOF.setApprovalForAll.call(toC6T8nOT, approvedT39dYsk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractrmPC7TH = await ERC721.new({from: accounts[1]});
		const tokenIds9udSa = BigInt("1956")
		const toYTjcQ3d = accounts[3]
		const tokenIdqqLwQIG = BigInt("1378")
		const _dataZKF0TeJ = "0x14090103181e1403191a1f0d0612131b191b06161a1c"
		const tokenIdlGLpLYW = BigInt("1738")
		const toac0sEf = accounts[1]
		const fromfMzHjNj = accounts[3]
		const ownerTlj0idf = accounts[1]
		await contractrmPC7TH.approve.call(toYTjcQ3d, tokenIds9udSa, {from: accounts[2]});
		const nullH2dMz5X = await contractrmPC7TH.ownerOf.call(tokenIdqqLwQIG, {from: accounts[1]});
		await contractrmPC7TH.safeTransferFrom.call(fromfMzHjNj, toac0sEf, tokenIdlGLpLYW, _dataZKF0TeJ, {from: accounts[4]});
		const nullK0GRVz = await contractrmPC7TH.balanceOf.call(ownerTlj0idf, {from: accounts[4]});

		await expect(contractrmPC7TH.approve.call(toYTjcQ3d, tokenIds9udSa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractX4lIqhu = await ERC721.new({from: accounts[1]});
		const tokenIdyYGBEcm = BigInt("1184")
		const approvedjK4De8I = true
		const tonF84uvO = accounts[3]
		const tokenIdN8HOhT1 = BigInt("1887")
		const toTQu8RSX = accounts[1]
		const fromjrxP8yJ = accounts[1]
		const operatorfeVvYwv = accounts[4]
		const ownerxRi3kmf = accounts[1]
		const nullXO19UNj = await contractX4lIqhu.getApproved.call(tokenIdyYGBEcm, {from: accounts[1]});
		await contractX4lIqhu.setApprovalForAll.call(tonF84uvO, approvedjK4De8I, {from: accounts[2]});
		await contractX4lIqhu.safeTransferFrom.call(fromjrxP8yJ, toTQu8RSX, tokenIdN8HOhT1, {from: accounts[4]});
		const nullV86skY = await contractX4lIqhu.isApprovedForAll.call(ownerxRi3kmf, operatorfeVvYwv, {from: accounts[4]});

		await expect(contractX4lIqhu.getApproved.call(tokenIdyYGBEcm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractt8kdI2y = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdhyKHJ2c = BigInt("1095")
		const towyCrPCp = accounts[4]
		const tokenIdfjcoyIJ = BigInt("679")
		const tokenIdreaO3zQ = BigInt("135")
		const toMxCsSKD = accounts[0]
		const fromh4xSH9 = accounts[5]
		const tokenIdfnFM5fX = BigInt("796")
		const toqPhBcUd = accounts[3]
		const fromCi2oOV4 = accounts[0]
		await contractt8kdI2y.approve.call(towyCrPCp, tokenIdhyKHJ2c, {from: accounts[3]});
		const nullAm0uvXh = await contractt8kdI2y.getApproved.call(tokenIdfjcoyIJ, {from: accounts[1]});
		await contractt8kdI2y.safeTransferFrom.call(fromh4xSH9, toMxCsSKD, tokenIdreaO3zQ, {from: "0x0000000000000000000000000000000000000001"});
		await contractt8kdI2y.transferFrom.call(fromCi2oOV4, toqPhBcUd, tokenIdfnFM5fX, {from: accounts[2]});
	});

	it('test for ERC721', async () => {
		const contractcmQPkwk = await ERC721.new({from: accounts[0]});
		const approvedSJmwJ9H = true
		const tokp7vBP = accounts[3]
		const approvedVoKYtoC = false
		const tookbZHBN = accounts[1]
		const tokenIdL7uhgI = BigInt("1910")
		const torVaEYj = accounts[0]
		const fromHktGwV = "0x0000000000000000000000000000000000000001"
		const operatorRybSndy = accounts[0]
		const ownerwQWLxIb = accounts[3]
		const tokenIdAnoCpbh = BigInt("1089")
		const toSvSUKvD = accounts[2]
		const froml6cRREI = accounts[2]
		const approvedNK77BCX = true
		const torIBMxNV = accounts[4]
		const tokenIdNKKPcGO = BigInt("1178")
		const tokenIdqXcSF0k = BigInt("872")
		const tohAGpHT0 = accounts[1]
		await contractcmQPkwk.setApprovalForAll.call(tokp7vBP, approvedSJmwJ9H, {from: accounts[4]});
		await contractcmQPkwk.setApprovalForAll.call(tookbZHBN, approvedVoKYtoC, {from: accounts[1]});
		await contractcmQPkwk.transferFrom.call(fromHktGwV, torVaEYj, tokenIdL7uhgI, {from: accounts[2]});
		const nullG1dv4EI = await contractcmQPkwk.isApprovedForAll.call(ownerwQWLxIb, operatorRybSndy, {from: accounts[5]});
		await contractcmQPkwk.safeTransferFrom.call(froml6cRREI, toSvSUKvD, tokenIdAnoCpbh, {from: accounts[2]});
		await contractcmQPkwk.setApprovalForAll.call(torIBMxNV, approvedNK77BCX, {from: accounts[4]});
		const nullPB3Bq8e = await contractcmQPkwk.ownerOf.call(tokenIdNKKPcGO, {from: accounts[3]});
		await contractcmQPkwk.approve.call(tohAGpHT0, tokenIdqXcSF0k, {from: accounts[2]});

		await expect(contractcmQPkwk.setApprovalForAll.call(tokp7vBP, approvedSJmwJ9H, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})