const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractz5LeP8N = await ERC721.new({from: accounts[1]});
		const tokenIdpwm07kp = BigInt("902")
		const toO5nAIE3 = accounts[3]
		const fromgctsbby = accounts[3]
		const tokenIdRZGmkq7 = BigInt("1247")
		const toZKSMiAE = accounts[4]
		await contractz5LeP8N.safeTransferFrom.call(fromgctsbby, toO5nAIE3, tokenIdpwm07kp, {from: accounts[3]});
		await contractz5LeP8N.approve.call(toZKSMiAE, tokenIdRZGmkq7, {from: accounts[3]});

		await expect(contractz5LeP8N.safeTransferFrom.call(fromgctsbby, toO5nAIE3, tokenIdpwm07kp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractgHXltCr = await ERC721.new({from: accounts[1]});
		const operatorZh0wiAa = accounts[3]
		const ownerp0gTepP = accounts[4]
		const tokenIdcH9jCfJ = BigInt("801")
		const toF67g0gM = accounts[0]
		const tokenIdK5FP7Z6 = BigInt("1773")
		const toqrLDfV5 = "0x0000000000000000000000000000000000000001"
		const fromqxiz7Ce = accounts[3]
		const tokenIdg5prf4N = BigInt("977")
		const tokenIdFSFaDW = BigInt("1163")
		const nullSxXydSD = await contractgHXltCr.isApprovedForAll.call(ownerp0gTepP, operatorZh0wiAa, {from: accounts[0]});
		await contractgHXltCr.approve.call(toF67g0gM, tokenIdcH9jCfJ, {from: accounts[4]});
		await contractgHXltCr.safeTransferFrom.call(fromqxiz7Ce, toqrLDfV5, tokenIdK5FP7Z6, {from: accounts[2]});
		const nullYTS3Ouf = await contractgHXltCr.ownerOf.call(tokenIdg5prf4N, {from: accounts[1]});
		const nulljOfkEwm = await contractgHXltCr.getApproved.call(tokenIdFSFaDW, {from: accounts[4]});

		assert.equal(nullSxXydSD, false)
		await expect(contractgHXltCr.approve.call(toF67g0gM, tokenIdcH9jCfJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractTi05qz = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const approvedy0nOeMw = true
		const tof9pzIdB = accounts[2]
		const tokenIdYTriQ8k = BigInt("1795")
		const approvedzxbNzxD = false
		const tou3g6bhl = accounts[0]
		const approvedKZsik3 = false
		const tofJxS2CC = accounts[4]
		await contractTi05qz.setApprovalForAll.call(tof9pzIdB, approvedy0nOeMw, {from: accounts[3]});
		const nullyBH7MDF = await contractTi05qz.ownerOf.call(tokenIdYTriQ8k, {from: accounts[1]});
		await contractTi05qz.setApprovalForAll.call(tou3g6bhl, approvedzxbNzxD, {from: accounts[4]});
		await contractTi05qz.setApprovalForAll.call(tofJxS2CC, approvedKZsik3, {from: accounts[4]});
	});

	it('test for ERC721', async () => {
		const contractlQEXq1N = await ERC721.new({from: accounts[4]});
		const ownersjHOZuP = accounts[3]
		const tokenIduCukcpT = BigInt("685")
		const tokenIddgERDOQ = BigInt("1321")
		const nullEsnXtvw = await contractlQEXq1N.balanceOf.call(ownersjHOZuP, {from: accounts[1]});
		const nullkYDGJAO = await contractlQEXq1N.getApproved.call(tokenIduCukcpT, {from: accounts[1]});
		const null7mt8A9 = await contractlQEXq1N.ownerOf.call(tokenIddgERDOQ, {from: accounts[4]});

		assert.equal(nullEsnXtvw, 0)
		await expect(contractlQEXq1N.getApproved.call(tokenIduCukcpT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractry1qhka = await ERC721.new({from: accounts[1]});
		const approvedLTo2DzU = false
		const tornacMY = accounts[1]
		const tokenIdCRWyPx = BigInt("902")
		const tolVqRILy = accounts[3]
		const fromRvHHIf8 = accounts[4]
		const tokenIdqJazJOl = BigInt("1247")
		const touZnpNm = accounts[4]
		await contractry1qhka.setApprovalForAll.call(tornacMY, approvedLTo2DzU, {from: accounts[3]});
		await contractry1qhka.safeTransferFrom.call(fromRvHHIf8, tolVqRILy, tokenIdCRWyPx, {from: accounts[3]});
		await contractry1qhka.approve.call(touZnpNm, tokenIdqJazJOl, {from: accounts[3]});

		await expect(contractry1qhka.setApprovalForAll.call(tornacMY, approvedLTo2DzU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractjYPBBzC = await ERC721.new({from: accounts[5]});
		const tokenIdFzXWfK8 = BigInt("1040")
		const toVoJDQOx = accounts[1]
		const fromlw57Njr = accounts[2]
		const approvedVyJDrCM = true
		const touGlvh0 = accounts[1]
		const operatorcDr0qRM = accounts[0]
		const ownerBcSPzPm = accounts[4]
		const tokenIdnloRv4Y = BigInt("2035")
		await contractjYPBBzC.transferFrom.call(fromlw57Njr, toVoJDQOx, tokenIdFzXWfK8, {from: accounts[1]});
		await contractjYPBBzC.setApprovalForAll.call(touGlvh0, approvedVyJDrCM, {from: accounts[1]});
		const nullJL6yDvO = await contractjYPBBzC.isApprovedForAll.call(ownerBcSPzPm, operatorcDr0qRM, {from: accounts[3]});
		const nullJtICW9c = await contractjYPBBzC.getApproved.call(tokenIdnloRv4Y, {from: accounts[0]});

		await expect(contractjYPBBzC.transferFrom.call(fromlw57Njr, toVoJDQOx, tokenIdFzXWfK8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracte43bkHk = await ERC721.new({from: accounts[1]});
		const approvedLPS11bu = true
		const toRYqVozt = accounts[3]
		const tokenIdQ4H3pKu = BigInt("1247")
		const tobF74mq = accounts[5]
		const approvedDuOmGg = true
		const toO1bsiz9 = accounts[2]
		await contracte43bkHk.setApprovalForAll.call(toRYqVozt, approvedLPS11bu, {from: accounts[3]});
		await contracte43bkHk.approve.call(tobF74mq, tokenIdQ4H3pKu, {from: accounts[3]});
		await contracte43bkHk.setApprovalForAll.call(toO1bsiz9, approvedDuOmGg, {from: accounts[2]});

		await expect(contracte43bkHk.setApprovalForAll.call(toRYqVozt, approvedLPS11bu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})