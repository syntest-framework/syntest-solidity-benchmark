const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractapjtgsz = await ERC721.new({from: accounts[3]});
		const ownerKBC9yo = accounts[1]
		const tokenId9YBDn5 = BigInt("981")
		const toE9quSw8 = accounts[0]
		const tokenIdmgCuvut = BigInt("1883")
		const toPijfuHX = accounts[3]
		const fromLCEovj = "0x0000000000000000000000000000000000000001"
		const nullF4h27BD = await contractapjtgsz.balanceOf.call(ownerKBC9yo, {from: accounts[0]});
		await contractapjtgsz.approve.call(toE9quSw8, tokenId9YBDn5, {from: "0x0000000000000000000000000000000000000001"});
		await contractapjtgsz.transferFrom.call(fromLCEovj, toPijfuHX, tokenIdmgCuvut, {from: accounts[4]});

		assert.equal(nullF4h27BD, 0)
		await expect(contractapjtgsz.approve.call(toE9quSw8, tokenId9YBDn5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractq9ic3uk = await ERC721.new({from: accounts[0]});
		const tokenIdnFNFyKz = BigInt("1466")
		const tokenIdIvRuuuV = BigInt("876")
		const toa068HbV = accounts[0]
		const approvedepUqDnN = false
		const toDDi1BLP = accounts[4]
		const tokenIdGhdUQzZ = BigInt("441")
		const toBdWhRxF = accounts[1]
		const _dataaFX98mk = "0x170d1d020c081e0e0b1d0f01160908180407091001051a19161d"
		const tokenIdCtfj9Da = BigInt("1695")
		const tovfetdF = accounts[3]
		const fromZeSqSa = accounts[1]
		const nullcRXPZqt = await contractq9ic3uk.getApproved.call(tokenIdnFNFyKz, {from: accounts[4]});
		await contractq9ic3uk.approve.call(toa068HbV, tokenIdIvRuuuV, {from: accounts[3]});
		await contractq9ic3uk.setApprovalForAll.call(toDDi1BLP, approvedepUqDnN, {from: accounts[4]});
		await contractq9ic3uk.approve.call(toBdWhRxF, tokenIdGhdUQzZ, {from: accounts[4]});
		await contractq9ic3uk.safeTransferFrom.call(fromZeSqSa, tovfetdF, tokenIdCtfj9Da, _dataaFX98mk, {from: accounts[2]});

		await expect(contractq9ic3uk.getApproved.call(tokenIdnFNFyKz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractnWf9fX0 = await ERC721.new({from: accounts[0]});
		const approvedAqPeTZT = true
		const toseEfKml = accounts[2]
		const tokenIdrJk4WwW = BigInt("1587")
		const tokenIdadceDT = BigInt("327")
		const ownerggz3w3 = accounts[0]
		await contractnWf9fX0.setApprovalForAll.call(toseEfKml, approvedAqPeTZT, {from: accounts[2]});
		const null3hiltE = await contractnWf9fX0.getApproved.call(tokenIdrJk4WwW, {from: accounts[3]});
		const nullCDBtDq9 = await contractnWf9fX0.getApproved.call(tokenIdadceDT, {from: accounts[3]});
		const nullRxLwBXV = await contractnWf9fX0.balanceOf.call(ownerggz3w3, {from: accounts[0]});

		await expect(contractnWf9fX0.setApprovalForAll.call(toseEfKml, approvedAqPeTZT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractqSGhil = await ERC721.new({from: accounts[0]});
		const operatoruv576ID = accounts[2]
		const ownerCt8wH9 = accounts[3]
		const tokenIdAnimwkY = BigInt("1742")
		const toxw3qDFX = accounts[1]
		const fromic2YRjJ = accounts[2]
		const tokenIdiBS5C39 = BigInt("1324")
		const toN0g37yF = accounts[3]
		const fromyGr5an = accounts[1]
		const approvedsp4bNb = false
		const tonkzXbM3 = accounts[3]
		const operatorHoaXT88 = accounts[3]
		const ownerXCwVRt5 = accounts[2]
		const nullaSmmgxb = await contractqSGhil.isApprovedForAll.call(ownerCt8wH9, operatoruv576ID, {from: accounts[1]});
		await contractqSGhil.safeTransferFrom.call(fromic2YRjJ, toxw3qDFX, tokenIdAnimwkY, {from: accounts[2]});
		await contractqSGhil.transferFrom.call(fromyGr5an, toN0g37yF, tokenIdiBS5C39, {from: "0x0000000000000000000000000000000000000001"});
		await contractqSGhil.setApprovalForAll.call(tonkzXbM3, approvedsp4bNb, {from: accounts[5]});
		const nulle6I6aS3 = await contractqSGhil.isApprovedForAll.call(ownerXCwVRt5, operatorHoaXT88, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullaSmmgxb, false)
		await expect(contractqSGhil.safeTransferFrom.call(fromic2YRjJ, toxw3qDFX, tokenIdAnimwkY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractYF7Uu7Y = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const operatorQvHA5V0 = accounts[1]
		const ownerTBNKadV = accounts[5]
		const operatoreMndCoZ = "0x0000000000000000000000000000000000000001"
		const ownerUpYRZAD = accounts[1]
		const tokenIdKoQ2rvy = BigInt("1819")
		const tokenIdqK9eba = BigInt("1952")
		const nullDQHh3z = await contractYF7Uu7Y.isApprovedForAll.call(ownerTBNKadV, operatorQvHA5V0, {from: accounts[2]});
		const nullXyAGWfp = await contractYF7Uu7Y.isApprovedForAll.call(ownerUpYRZAD, operatoreMndCoZ, {from: accounts[3]});
		const nullA3tqQGE = await contractYF7Uu7Y.getApproved.call(tokenIdKoQ2rvy, {from: accounts[5]});
		const nullz5voM8r = await contractYF7Uu7Y.ownerOf.call(tokenIdqK9eba, {from: accounts[1]});
	});
})