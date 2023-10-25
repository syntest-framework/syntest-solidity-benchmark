const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractzr6xtSn = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const operatorOUZHhNA = accounts[1]
		const ownerNuzhjBs = accounts[3]
		const tokenId0j8dsZ = BigInt("1323")
		const nulluwFLZeu = await contractzr6xtSn.isApprovedForAll.call(ownerNuzhjBs, operatorOUZHhNA, {from: accounts[1]});
		const nullnXq7gzM = await contractzr6xtSn.ownerOf.call(tokenId0j8dsZ, {from: accounts[1]});
	});

	it('test for ERC721', async () => {
		const contractJCfh0RK = await ERC721.new({from: accounts[1]});
		const tokenIdFh6AMi8 = BigInt("1156")
		const tokenIdeVRrq9A = BigInt("1638")
		const tokenIdPG4E3Ky = BigInt("1121")
		const nullS5VxgNI = await contractJCfh0RK.getApproved.call(tokenIdFh6AMi8, {from: accounts[2]});
		const nullObKV14S = await contractJCfh0RK.getApproved.call(tokenIdeVRrq9A, {from: accounts[0]});
		const nullHs7mzE = await contractJCfh0RK.ownerOf.call(tokenIdPG4E3Ky, {from: accounts[0]});

		await expect(contractJCfh0RK.getApproved.call(tokenIdFh6AMi8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractmJKkugB = await ERC721.new({from: accounts[4]});
		const tokenIdP3l9O8J = BigInt("683")
		const tokenIdGrwcSvx = BigInt("29")
		const toc8MPAn7 = accounts[4]
		const nullpWcuLt8 = await contractmJKkugB.ownerOf.call(tokenIdP3l9O8J, {from: accounts[0]});
		await contractmJKkugB.approve.call(toc8MPAn7, tokenIdGrwcSvx, {from: accounts[2]});

		await expect(contractmJKkugB.ownerOf.call(tokenIdP3l9O8J, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractURJJpe9 = await ERC721.new({from: accounts[1]});
		const tokenIdtMPgvAp = BigInt("1478")
		const toQY99lqF = accounts[4]
		const fromkPjhYIV = accounts[2]
		const ownerAtL51xP = accounts[3]
		const tokenIdD0v89f5 = BigInt("710")
		const topK64b5s = accounts[0]
		const fromHIFN3kc = accounts[0]
		const approvedQHcUPsu = false
		const toitgzHBZ = accounts[5]
		const tokenIdgY25F3c = BigInt("1369")
		await contractURJJpe9.safeTransferFrom.call(fromkPjhYIV, toQY99lqF, tokenIdtMPgvAp, {from: accounts[5]});
		const nullxz5jZP = await contractURJJpe9.balanceOf.call(ownerAtL51xP, {from: accounts[1]});
		await contractURJJpe9.safeTransferFrom.call(fromHIFN3kc, topK64b5s, tokenIdD0v89f5, {from: accounts[0]});
		await contractURJJpe9.setApprovalForAll.call(toitgzHBZ, approvedQHcUPsu, {from: accounts[4]});
		const nulluTNPDz = await contractURJJpe9.ownerOf.call(tokenIdgY25F3c, {from: accounts[3]});

		await expect(contractURJJpe9.safeTransferFrom.call(fromkPjhYIV, toQY99lqF, tokenIdtMPgvAp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractFK3sfpM = await ERC721.new({from: accounts[2]});
		const tokenIdCuyRGfc = BigInt("1152")
		const toAxVxHKN = accounts[3]
		const tokenIdyTbaXNl = BigInt("1726")
		const approvedeKGkdnC = true
		const toe25fbnR = accounts[0]
		const tokenIdnSkZIL = BigInt("1415")
		await contractFK3sfpM.approve.call(toAxVxHKN, tokenIdCuyRGfc, {from: accounts[2]});
		const nullcDG1dn6 = await contractFK3sfpM.getApproved.call(tokenIdyTbaXNl, {from: "0x0000000000000000000000000000000000000001"});
		await contractFK3sfpM.setApprovalForAll.call(toe25fbnR, approvedeKGkdnC, {from: accounts[3]});
		const nullArqf2h4 = await contractFK3sfpM.ownerOf.call(tokenIdnSkZIL, {from: accounts[2]});

		await expect(contractFK3sfpM.approve.call(toAxVxHKN, tokenIdCuyRGfc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracttvmmN6Y = await ERC721.new({from: accounts[1]});
		const tokenIdwEfZob8 = BigInt("1368")
		const toHCYZowY = accounts[4]
		const fromEC90CL1 = accounts[2]
		const tokenIdnmp5qQB = BigInt("662")
		const toNtFBTdI = accounts[5]
		const fromVS7h77j = accounts[5]
		const tokenIdi88354D = BigInt("489")
		const toE1AcPdQ = accounts[1]
		const ownerV2zMWw = accounts[4]
		await contracttvmmN6Y.transferFrom.call(fromEC90CL1, toHCYZowY, tokenIdwEfZob8, {from: accounts[4]});
		await contracttvmmN6Y.transferFrom.call(fromVS7h77j, toNtFBTdI, tokenIdnmp5qQB, {from: accounts[0]});
		await contracttvmmN6Y.approve.call(toE1AcPdQ, tokenIdi88354D, {from: accounts[3]});
		const nullAojiPQG = await contracttvmmN6Y.balanceOf.call(ownerV2zMWw, {from: accounts[4]});

		await expect(contracttvmmN6Y.transferFrom.call(fromEC90CL1, toHCYZowY, tokenIdwEfZob8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractAU67Koo = await ERC721.new({from: accounts[4]});
		const operatorNgDVKv3 = accounts[3]
		const ownerdhQiR4V = accounts[5]
		const tokenIdb7XPX6g = BigInt("1069")
		const toMmTiW1Q = accounts[0]
		const _dataR8CoFO = "0x1a010407160b10151d09121f1618161f05090e1e"
		const tokenIdco6s0h6 = BigInt("1560")
		const toSWIYS9h = accounts[4]
		const fromEzmgvG = accounts[1]
		const nullQhJfTuH = await contractAU67Koo.isApprovedForAll.call(ownerdhQiR4V, operatorNgDVKv3, {from: accounts[3]});
		await contractAU67Koo.approve.call(toMmTiW1Q, tokenIdb7XPX6g, {from: accounts[5]});
		await contractAU67Koo.safeTransferFrom.call(fromEzmgvG, toSWIYS9h, tokenIdco6s0h6, _dataR8CoFO, {from: accounts[3]});

		assert.equal(nullQhJfTuH, false)
		await expect(contractAU67Koo.approve.call(toMmTiW1Q, tokenIdb7XPX6g, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractA6fHeGq = await ERC721.new({from: accounts[4]});
		const operatorRouNgTK = accounts[3]
		const ownerEsVMt3J = accounts[5]
		const ownerBOOJHwV = "0x0000000000000000000000000000000000000001"
		const tokenIdIVudyzV = BigInt("833")
		const to8KfwgB = accounts[1]
		const tokenIdg6QQioQ = BigInt("961")
		const toOR5pgco = accounts[3]
		const fromBNsw7g = "0x0000000000000000000000000000000000000001"
		const tokenIdRsIOLyd = BigInt("763")
		const toyw3XZyJ = accounts[0]
		const _datafUhN3nn = "0x1a010407160b10151d09121f1618161f05090e1e"
		const tokenIdUgBgS8V = BigInt("1560")
		const toPQTlPpU = accounts[4]
		const fromT1yqQwb = accounts[1]
		const nullDk1lXq0 = await contractA6fHeGq.isApprovedForAll.call(ownerEsVMt3J, operatorRouNgTK, {from: accounts[3]});
		const nulluTGprli = await contractA6fHeGq.balanceOf.call(ownerBOOJHwV, {from: accounts[4]});
		await contractA6fHeGq.approve.call(to8KfwgB, tokenIdIVudyzV, {from: accounts[2]});
		await contractA6fHeGq.transferFrom.call(fromBNsw7g, toOR5pgco, tokenIdg6QQioQ, {from: accounts[3]});
		await contractA6fHeGq.approve.call(toyw3XZyJ, tokenIdRsIOLyd, {from: accounts[5]});
		await contractA6fHeGq.safeTransferFrom.call(fromT1yqQwb, toPQTlPpU, tokenIdUgBgS8V, _datafUhN3nn, {from: accounts[3]});

		assert.equal(nullDk1lXq0, false)
		assert.equal(nulluTGprli, 0)
		await expect(contractA6fHeGq.approve.call(to8KfwgB, tokenIdIVudyzV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractPYkwRP4 = await ERC721.new({from: accounts[1]});
		const approvedhbuNR9T = true
		const toZRtWHBx = accounts[4]
		const approvedwTsCWbe = true
		const toW55eeln = accounts[4]
		const operatorc7oVTrk = "0x0000000000000000000000000000000000000001"
		const ownerDC3nAIG = "0x0000000000000000000000000000000000000001"
		const operatora1snefj = accounts[0]
		const ownerSDXg2OF = accounts[0]
		await contractPYkwRP4.setApprovalForAll.call(toZRtWHBx, approvedhbuNR9T, {from: accounts[2]});
		await contractPYkwRP4.setApprovalForAll.call(toW55eeln, approvedwTsCWbe, {from: accounts[1]});
		const nullRlOmCeF = await contractPYkwRP4.isApprovedForAll.call(ownerDC3nAIG, operatorc7oVTrk, {from: accounts[2]});
		const nullPOgFG0Z = await contractPYkwRP4.isApprovedForAll.call(ownerSDXg2OF, operatora1snefj, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullPOgFG0Z, false)
		assert.equal(nullRlOmCeF, false)
	});

	it('test for ERC721', async () => {
		const contractUxy1XVM = await ERC721.new({from: accounts[4]});
		const approvedpNXubQv = false
		const tolC3juCg = accounts[2]
		const tokenIdBlsUM0u = BigInt("689")
		const tokenIdXis9CAj = BigInt("29")
		const toESvWqMY = accounts[4]
		await contractUxy1XVM.setApprovalForAll.call(tolC3juCg, approvedpNXubQv, {from: accounts[2]});
		const nullHJ6eqw = await contractUxy1XVM.ownerOf.call(tokenIdBlsUM0u, {from: accounts[0]});
		await contractUxy1XVM.approve.call(toESvWqMY, tokenIdXis9CAj, {from: accounts[2]});

		await expect(contractUxy1XVM.setApprovalForAll.call(tolC3juCg, approvedpNXubQv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})