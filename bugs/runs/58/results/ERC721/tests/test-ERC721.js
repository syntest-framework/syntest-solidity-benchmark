const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractDCSSIKE = await ERC721.new({from: accounts[4]});
		const tokenIdhsqAf9P = BigInt("526")
		const approveddXjWvN = true
		const toHR3lEV = accounts[0]
		const tokenIdSvHRXti = BigInt("1086")
		const tokenIdd8Nt1r3 = BigInt("1590")
		const _datattMjl6u = "0x0419171c180d0c1012020007"
		const tokenIdCZQ0hqu = BigInt("1999")
		const toTAWEEmQ = accounts[4]
		const fromK9i73W6 = accounts[1]
		const nulll2b1ber = await contractDCSSIKE.getApproved.call(tokenIdhsqAf9P, {from: accounts[2]});
		await contractDCSSIKE.setApprovalForAll.call(toHR3lEV, approveddXjWvN, {from: accounts[4]});
		const nullnUDHlTK = await contractDCSSIKE.getApproved.call(tokenIdSvHRXti, {from: accounts[5]});
		const nullg2dCQ19 = await contractDCSSIKE.ownerOf.call(tokenIdd8Nt1r3, {from: accounts[3]});
		await contractDCSSIKE.safeTransferFrom.call(fromK9i73W6, toTAWEEmQ, tokenIdCZQ0hqu, _datattMjl6u, {from: accounts[0]});

		await expect(contractDCSSIKE.getApproved.call(tokenIdhsqAf9P, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractCmeHczV = await ERC721.new({from: accounts[4]});
		const approvedq2QgXZs = true
		const tof73hbS = accounts[3]
		const tokenIdl5KTLJC = BigInt("1298")
		const tojH8YGgU = accounts[2]
		const fromRldCbwm = "0x0000000000000000000000000000000000000001"
		const approvedptafzt6 = false
		const tosuRbwlG = "0x0000000000000000000000000000000000000001"
		const tokenIdI2I8rhS = BigInt("895")
		const toDJsRzEk = accounts[1]
		const fromhofCHw7 = accounts[1]
		await contractCmeHczV.setApprovalForAll.call(tof73hbS, approvedq2QgXZs, {from: accounts[4]});
		await contractCmeHczV.safeTransferFrom.call(fromRldCbwm, tojH8YGgU, tokenIdl5KTLJC, {from: accounts[0]});
		await contractCmeHczV.setApprovalForAll.call(tosuRbwlG, approvedptafzt6, {from: accounts[2]});
		await contractCmeHczV.transferFrom.call(fromhofCHw7, toDJsRzEk, tokenIdI2I8rhS, {from: accounts[3]});

		await expect(contractCmeHczV.setApprovalForAll.call(tof73hbS, approvedq2QgXZs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractDFXC24C = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdX7IaWDZ = BigInt("1991")
		const tot1XvRSw = accounts[1]
		const tokenIdZq3Fpzp = BigInt("967")
		const tokenIdEXqdlMD = BigInt("531")
		const toyLNuNn4 = accounts[2]
		const fromrtCpivQ = accounts[1]
		const approvedhLJlShN = true
		const toM3yExNg = accounts[0]
		const operatorgT1d2IG = accounts[1]
		const ownerfdifacg = accounts[2]
		const tokenIdwYqvOXJ = BigInt("1419")
		const tonrhHFiA = accounts[0]
		await contractDFXC24C.approve.call(tot1XvRSw, tokenIdX7IaWDZ, {from: accounts[4]});
		const nullXopAbMp = await contractDFXC24C.getApproved.call(tokenIdZq3Fpzp, {from: accounts[4]});
		await contractDFXC24C.transferFrom.call(fromrtCpivQ, toyLNuNn4, tokenIdEXqdlMD, {from: accounts[1]});
		await contractDFXC24C.setApprovalForAll.call(toM3yExNg, approvedhLJlShN, {from: accounts[5]});
		const nullpHa6XEV = await contractDFXC24C.isApprovedForAll.call(ownerfdifacg, operatorgT1d2IG, {from: accounts[5]});
		await contractDFXC24C.approve.call(tonrhHFiA, tokenIdwYqvOXJ, {from: accounts[0]});
	});

	it('test for ERC721', async () => {
		const contracttkcx7vt = await ERC721.new({from: accounts[5]});
		const tokenIdkMcFNaS = BigInt("942")
		const toxrSSV9G = accounts[3]
		const fromWEciazT = accounts[0]
		const tokenIdy09Okz = BigInt("1589")
		const operatorgDlLdFD = accounts[2]
		const ownerGBssQPQ = accounts[1]
		const tokenIdBisoUX = BigInt("265")
		const toBZEasgR = "0x0000000000000000000000000000000000000001"
		const fromAyxX5C = accounts[4]
		await contracttkcx7vt.transferFrom.call(fromWEciazT, toxrSSV9G, tokenIdkMcFNaS, {from: accounts[2]});
		const nullRAmDcio = await contracttkcx7vt.getApproved.call(tokenIdy09Okz, {from: accounts[2]});
		const nullVoIzNvO = await contracttkcx7vt.isApprovedForAll.call(ownerGBssQPQ, operatorgDlLdFD, {from: accounts[2]});
		await contracttkcx7vt.transferFrom.call(fromAyxX5C, toBZEasgR, tokenIdBisoUX, {from: accounts[1]});

		await expect(contracttkcx7vt.transferFrom.call(fromWEciazT, toxrSSV9G, tokenIdkMcFNaS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractSn1Tua = await ERC721.new({from: accounts[3]});
		const operatormHcPTtr = accounts[3]
		const ownerOZi2Jx6 = accounts[1]
		const tokenIdjG8PQFz = BigInt("294")
		const operatorzSwjotQ = accounts[2]
		const ownerM8PQvkA = accounts[0]
		const nullTkw6Ub = await contractSn1Tua.isApprovedForAll.call(ownerOZi2Jx6, operatormHcPTtr, {from: accounts[5]});
		const nullpU6WRl5 = await contractSn1Tua.getApproved.call(tokenIdjG8PQFz, {from: accounts[4]});
		const nulllOvqPqv = await contractSn1Tua.isApprovedForAll.call(ownerM8PQvkA, operatorzSwjotQ, {from: accounts[5]});

		assert.equal(nullTkw6Ub, false)
		await expect(contractSn1Tua.getApproved.call(tokenIdjG8PQFz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractqTjrYhN = await ERC721.new({from: accounts[4]});
		const approvedgA0RJIo = false
		const topNmdejp = accounts[0]
		const tokenIdR1t63Sp = BigInt("1684")
		const tokenIdbmzJWId = BigInt("1515")
		const tokenIdycnMXIH = BigInt("558")
		const toLL6pUDK = accounts[2]
		await contractqTjrYhN.setApprovalForAll.call(topNmdejp, approvedgA0RJIo, {from: "0x0000000000000000000000000000000000000001"});
		const nullqE20n49 = await contractqTjrYhN.ownerOf.call(tokenIdR1t63Sp, {from: accounts[0]});
		const nulli1z4yGb = await contractqTjrYhN.getApproved.call(tokenIdbmzJWId, {from: accounts[4]});
		await contractqTjrYhN.approve.call(toLL6pUDK, tokenIdycnMXIH, {from: accounts[2]});

		await expect(contractqTjrYhN.setApprovalForAll.call(topNmdejp, approvedgA0RJIo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractVhUyqtM = await ERC721.new({from: accounts[4]});
		const approvedG2nauT = false
		const topGZfZeR = accounts[0]
		const tokenIdNV6MEqY = BigInt("1683")
		const toL0Ot4GP = accounts[4]
		const tokenIdVze1p0R = BigInt("1684")
		const tokenIdpWV7D5d = BigInt("1515")
		const tokenIdRvBT9GJ = BigInt("558")
		const tofcdJ7ks = accounts[2]
		await contractVhUyqtM.setApprovalForAll.call(topGZfZeR, approvedG2nauT, {from: "0x0000000000000000000000000000000000000001"});
		await contractVhUyqtM.approve.call(toL0Ot4GP, tokenIdNV6MEqY, {from: accounts[2]});
		const nullRAQ49Y8 = await contractVhUyqtM.ownerOf.call(tokenIdVze1p0R, {from: accounts[0]});
		const nullGTlwSei = await contractVhUyqtM.getApproved.call(tokenIdpWV7D5d, {from: accounts[4]});
		await contractVhUyqtM.approve.call(tofcdJ7ks, tokenIdRvBT9GJ, {from: accounts[2]});

		await expect(contractVhUyqtM.setApprovalForAll.call(topGZfZeR, approvedG2nauT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractsnd3RY = await ERC721.new({from: accounts[3]});
		const approveddCzDKGu = false
		const todorgqNg = accounts[4]
		const ownerhyYEzqr = accounts[1]
		const operatorAfMuidT = accounts[4]
		const ownerBDUXRAp = accounts[3]
		const tokenIdSgqk1HA = BigInt("1364")
		const toddLoc5z = accounts[1]
		const fromZkPCeFE = accounts[2]
		await contractsnd3RY.setApprovalForAll.call(todorgqNg, approveddCzDKGu, {from: accounts[0]});
		const nullPFpuFKW = await contractsnd3RY.balanceOf.call(ownerhyYEzqr, {from: accounts[3]});
		const nullfmx7gdr = await contractsnd3RY.isApprovedForAll.call(ownerBDUXRAp, operatorAfMuidT, {from: accounts[3]});
		await contractsnd3RY.transferFrom.call(fromZkPCeFE, toddLoc5z, tokenIdSgqk1HA, {from: accounts[3]});

		assert.equal(nullPFpuFKW, 0)
		assert.equal(nullfmx7gdr, false)
		await expect(contractsnd3RY.isApprovedForAll.call(ownerBDUXRAp, operatorAfMuidT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractbeY9F3E = await ERC721.new({from: accounts[3]});
		const approvedqoYaLJU = true
		const tobz5db2O = "0x0000000000000000000000000000000000000001"
		const tokenIdN78pp7J = BigInt("393")
		const operatorBG5CLJx = accounts[4]
		const ownerOZyTYqr = accounts[3]
		await contractbeY9F3E.setApprovalForAll.call(tobz5db2O, approvedqoYaLJU, {from: "0x0000000000000000000000000000000000000001"});
		const nullwXMGue6 = await contractbeY9F3E.getApproved.call(tokenIdN78pp7J, {from: accounts[4]});
		const nullG2gLQEN = await contractbeY9F3E.isApprovedForAll.call(ownerOZyTYqr, operatorBG5CLJx, {from: accounts[3]});

		await expect(contractbeY9F3E.setApprovalForAll.call(tobz5db2O, approvedqoYaLJU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})