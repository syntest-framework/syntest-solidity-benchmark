const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractkpxnb7V = await ERC721.new({from: accounts[1]});
		const approvedyGd7Pjm = true
		const tojYoaw3R = accounts[3]
		const tokenIdMh1RuA0 = BigInt("208")
		const tojJFMj7 = accounts[0]
		const fromp1T4ouu = accounts[1]
		const tokenIdGx6ZT0 = BigInt("1819")
		const toBl5QTeE = accounts[4]
		const tokenIdDw5Z7Me = BigInt("334")
		await contractkpxnb7V.setApprovalForAll.call(tojYoaw3R, approvedyGd7Pjm, {from: accounts[3]});
		await contractkpxnb7V.transferFrom.call(fromp1T4ouu, tojJFMj7, tokenIdMh1RuA0, {from: accounts[4]});
		await contractkpxnb7V.approve.call(toBl5QTeE, tokenIdGx6ZT0, {from: accounts[4]});
		const nullqAhqGx8 = await contractkpxnb7V.getApproved.call(tokenIdDw5Z7Me, {from: accounts[1]});

		await expect(contractkpxnb7V.setApprovalForAll.call(tojYoaw3R, approvedyGd7Pjm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractUqiKa5E = await ERC721.new({from: accounts[1]});
		const tokenIdKtrorgA = BigInt("468")
		const tokenIdhLJMtxH = BigInt("1765")
		const toit2jGGz = accounts[1]
		const fromTQd32Ny = accounts[4]
		const tokenIdYq2sK4w = BigInt("1090")
		const toSRoHZW = accounts[1]
		const fromR9CMmd7 = accounts[2]
		const tokenIdJFcau5G = BigInt("1193")
		const toIC1laZv = accounts[2]
		const fromOJPL8KT = accounts[1]
		const _dataHSCm0MM = "0x0f190d0b0f08151f18031015030619050b1e"
		const tokenIdIIMdgtu = BigInt("1374")
		const torOSFHnp = accounts[1]
		const fromFvJhc0I = accounts[3]
		const approvedgbBw30 = false
		const tovC289v = accounts[4]
		const nullYROVKS = await contractUqiKa5E.ownerOf.call(tokenIdKtrorgA, {from: accounts[0]});
		await contractUqiKa5E.safeTransferFrom.call(fromTQd32Ny, toit2jGGz, tokenIdhLJMtxH, {from: "0x0000000000000000000000000000000000000001"});
		await contractUqiKa5E.safeTransferFrom.call(fromR9CMmd7, toSRoHZW, tokenIdYq2sK4w, {from: accounts[5]});
		await contractUqiKa5E.transferFrom.call(fromOJPL8KT, toIC1laZv, tokenIdJFcau5G, {from: accounts[5]});
		await contractUqiKa5E.safeTransferFrom.call(fromFvJhc0I, torOSFHnp, tokenIdIIMdgtu, _dataHSCm0MM, {from: accounts[5]});
		await contractUqiKa5E.setApprovalForAll.call(tovC289v, approvedgbBw30, {from: accounts[4]});

		await expect(contractUqiKa5E.ownerOf.call(tokenIdKtrorgA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracti3ZkQQU = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdwmby3eu = BigInt("1496")
		const toAOdXkgE = "0x0000000000000000000000000000000000000001"
		const frommXMgmNE = accounts[2]
		const _dataoo5k7jB = "0x1e0b050c0d050c0a011212141c00051212020a0b1f04131b0b0e0c0d"
		const tokenIdmTRtG96 = BigInt("1134")
		const tosWXrjJx = accounts[1]
		const fromqnKOED = accounts[5]
		const tokenIdko6Q6TP = BigInt("1816")
		await contracti3ZkQQU.transferFrom.call(frommXMgmNE, toAOdXkgE, tokenIdwmby3eu, {from: accounts[5]});
		await contracti3ZkQQU.safeTransferFrom.call(fromqnKOED, tosWXrjJx, tokenIdmTRtG96, _dataoo5k7jB, {from: accounts[3]});
		const nullWdiLFF = await contracti3ZkQQU.getApproved.call(tokenIdko6Q6TP, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ERC721', async () => {
		const contractT3l42ws = await ERC721.new({from: accounts[2]});
		const operatorIQpAWJE = accounts[3]
		const ownerfrm9AVN = accounts[5]
		const tokenIdO2c0LuP = BigInt("1626")
		const toXXA3RS = accounts[4]
		const fromFhz4l55 = accounts[1]
		const approvedDw5SyLt = false
		const toFD4KgHZ = accounts[0]
		const tokenIdRpioyoJ = BigInt("1165")
		const tozkadIBH = "0x0000000000000000000000000000000000000001"
		const approvedfcGekVo = true
		const toUjwuzco = accounts[1]
		const nullJEsLPaT = await contractT3l42ws.isApprovedForAll.call(ownerfrm9AVN, operatorIQpAWJE, {from: accounts[5]});
		await contractT3l42ws.transferFrom.call(fromFhz4l55, toXXA3RS, tokenIdO2c0LuP, {from: accounts[1]});
		await contractT3l42ws.setApprovalForAll.call(toFD4KgHZ, approvedDw5SyLt, {from: accounts[4]});
		await contractT3l42ws.approve.call(tozkadIBH, tokenIdRpioyoJ, {from: accounts[0]});
		await contractT3l42ws.setApprovalForAll.call(toUjwuzco, approvedfcGekVo, {from: accounts[1]});

		assert.equal(nullJEsLPaT, false)
		await expect(contractT3l42ws.transferFrom.call(fromFhz4l55, toXXA3RS, tokenIdO2c0LuP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractyFId8SJ = await ERC721.new({from: accounts[1]});
		const tokenIdtXGocB8 = BigInt("1261")
		const tokenIdaibRbT = BigInt("1834")
		const tokenIdUYoqBN = BigInt("210")
		const nullL9uxtVe = await contractyFId8SJ.getApproved.call(tokenIdtXGocB8, {from: accounts[4]});
		const nullWsF9w8 = await contractyFId8SJ.ownerOf.call(tokenIdaibRbT, {from: accounts[5]});
		const nullnaicN2q = await contractyFId8SJ.ownerOf.call(tokenIdUYoqBN, {from: accounts[2]});

		await expect(contractyFId8SJ.getApproved.call(tokenIdtXGocB8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})