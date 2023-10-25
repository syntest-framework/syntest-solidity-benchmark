const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractkktXWJu = await ERC721.new({from: accounts[3]});
		const ownerXi0tTt4 = accounts[4]
		const tokenIdXiytA2m = BigInt("1344")
		const toj6UGwZt = "0x0000000000000000000000000000000000000001"
		const approvedAW2DuKX = true
		const toy0jNCgt = accounts[1]
		const tokenIdemxOFOy = BigInt("145")
		const nullWodHrCh = await contractkktXWJu.balanceOf.call(ownerXi0tTt4, {from: accounts[3]});
		await contractkktXWJu.approve.call(toj6UGwZt, tokenIdXiytA2m, {from: accounts[1]});
		await contractkktXWJu.setApprovalForAll.call(toy0jNCgt, approvedAW2DuKX, {from: accounts[2]});
		const nulltDAkcp0 = await contractkktXWJu.ownerOf.call(tokenIdemxOFOy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullWodHrCh, 0)
		await expect(contractkktXWJu.approve.call(toj6UGwZt, tokenIdXiytA2m, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractqZ7ByQZ = await ERC721.new({from: accounts[3]});
		const tokenIdkjmd6L3 = BigInt("537")
		const tosJoqff9 = accounts[4]
		const fromSwvgUMe = accounts[4]
		const tokenIdHMEMtPa = BigInt("673")
		const toxRO1TjY = accounts[2]
		const fromRAKvIRo = accounts[0]
		const operatorZX3oKtR = "0x0000000000000000000000000000000000000001"
		const ownerKm3YtIN = accounts[1]
		const approvedLWKWBWe = true
		const toLQHfMlM = accounts[1]
		const approvedwVC0fc = true
		const toX2lnrZl = accounts[1]
		await contractqZ7ByQZ.safeTransferFrom.call(fromSwvgUMe, tosJoqff9, tokenIdkjmd6L3, {from: accounts[3]});
		await contractqZ7ByQZ.transferFrom.call(fromRAKvIRo, toxRO1TjY, tokenIdHMEMtPa, {from: accounts[3]});
		const nullNouFUtu = await contractqZ7ByQZ.isApprovedForAll.call(ownerKm3YtIN, operatorZX3oKtR, {from: accounts[2]});
		await contractqZ7ByQZ.setApprovalForAll.call(toLQHfMlM, approvedLWKWBWe, {from: accounts[4]});
		await contractqZ7ByQZ.setApprovalForAll.call(toX2lnrZl, approvedwVC0fc, {from: accounts[3]});

		await expect(contractqZ7ByQZ.safeTransferFrom.call(fromSwvgUMe, tosJoqff9, tokenIdkjmd6L3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractGe9fPc = await ERC721.new({from: accounts[2]});
		const approvedntS0Gjq = false
		const tovE0Iyej = accounts[3]
		const tokenIdgY6eHpV = BigInt("619")
		const operatorjop701I = accounts[3]
		const ownerl1A5QX5 = accounts[4]
		const ownersFYengv = accounts[4]
		await contractGe9fPc.setApprovalForAll.call(tovE0Iyej, approvedntS0Gjq, {from: accounts[4]});
		const nullgT2XP5 = await contractGe9fPc.getApproved.call(tokenIdgY6eHpV, {from: accounts[3]});
		const nullQI2R1gh = await contractGe9fPc.isApprovedForAll.call(ownerl1A5QX5, operatorjop701I, {from: "0x0000000000000000000000000000000000000001"});
		const nullU8N3Ekq = await contractGe9fPc.balanceOf.call(ownersFYengv, {from: accounts[5]});

		await expect(contractGe9fPc.setApprovalForAll.call(tovE0Iyej, approvedntS0Gjq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractryAbdcS = await ERC721.new({from: accounts[2]});
		const tokenIdtC1DBZk = BigInt("273")
		const toGYAWAOv = accounts[3]
		const fromfPbmxEm = accounts[0]
		const tokenIdygC9tmh = BigInt("15")
		const toaEvKCva = accounts[2]
		const operatorPvg3NJU = accounts[3]
		const ownerz7vpd7 = accounts[0]
		const operatorG15W8xp = accounts[0]
		const ownery1TnGsZ = accounts[2]
		await contractryAbdcS.transferFrom.call(fromfPbmxEm, toGYAWAOv, tokenIdtC1DBZk, {from: accounts[4]});
		await contractryAbdcS.approve.call(toaEvKCva, tokenIdygC9tmh, {from: accounts[3]});
		const nullJCr6Dg = await contractryAbdcS.isApprovedForAll.call(ownerz7vpd7, operatorPvg3NJU, {from: accounts[5]});
		const nullbQeA0x7 = await contractryAbdcS.isApprovedForAll.call(ownery1TnGsZ, operatorG15W8xp, {from: accounts[1]});

		await expect(contractryAbdcS.transferFrom.call(fromfPbmxEm, toGYAWAOv, tokenIdtC1DBZk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractD0GwyRg = await ERC721.new({from: accounts[4]});
		const ownerunsMP0 = accounts[3]
		const operatorAwEL4bO = accounts[3]
		const ownerA6DwXF = accounts[3]
		const approvedb3warp1 = true
		const ton6p9Ixw = accounts[0]
		const tokenIdm0hdPKu = BigInt("1713")
		const toVCdAymx = accounts[0]
		const nullsg2TyL6 = await contractD0GwyRg.balanceOf.call(ownerunsMP0, {from: accounts[1]});
		const nullHFLSKMw = await contractD0GwyRg.isApprovedForAll.call(ownerA6DwXF, operatorAwEL4bO, {from: accounts[3]});
		await contractD0GwyRg.setApprovalForAll.call(ton6p9Ixw, approvedb3warp1, {from: accounts[3]});
		await contractD0GwyRg.approve.call(toVCdAymx, tokenIdm0hdPKu, {from: accounts[1]});

		assert.equal(nullHFLSKMw, false)
		assert.equal(nullsg2TyL6, 0)
		await expect(contractD0GwyRg.setApprovalForAll.call(ton6p9Ixw, approvedb3warp1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractS0ELPF8 = await ERC721.new({from: accounts[2]});
		const approvedRytfRwY = true
		const tokZJeVXI = accounts[2]
		const tokenIdmucBF07 = BigInt("652")
		const operatorlQif6PP = accounts[3]
		const ownermcZPh09 = accounts[2]
		await contractS0ELPF8.setApprovalForAll.call(tokZJeVXI, approvedRytfRwY, {from: accounts[2]});
		const nullsYra6l = await contractS0ELPF8.ownerOf.call(tokenIdmucBF07, {from: "0x0000000000000000000000000000000000000001"});
		const nullnrU2Tk = await contractS0ELPF8.isApprovedForAll.call(ownermcZPh09, operatorlQif6PP, {from: accounts[3]});

		await expect(contractS0ELPF8.setApprovalForAll.call(tokZJeVXI, approvedRytfRwY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractSGygYXo = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const _datavDatnB = "0x170a15120d170b1f"
		const tokenIdLQq07JS = BigInt("938")
		const toUBWmg3I = accounts[3]
		const fromqSzLbTN = accounts[4]
		const tokenIdVBxDqHL = BigInt("885")
		const toBFCDro9 = accounts[3]
		const fromS10ARk5 = accounts[1]
		const tokenIdX1tukT = BigInt("1279")
		const tokenIdnfQ3cFx = BigInt("1824")
		const toQquV8oE = "0x0000000000000000000000000000000000000001"
		const fromkzSyUI = accounts[1]
		await contractSGygYXo.safeTransferFrom.call(fromqSzLbTN, toUBWmg3I, tokenIdLQq07JS, _datavDatnB, {from: accounts[4]});
		await contractSGygYXo.safeTransferFrom.call(fromS10ARk5, toBFCDro9, tokenIdVBxDqHL, {from: accounts[4]});
		const nullyyhVGJS = await contractSGygYXo.ownerOf.call(tokenIdX1tukT, {from: accounts[1]});
		await contractSGygYXo.safeTransferFrom.call(fromkzSyUI, toQquV8oE, tokenIdnfQ3cFx, {from: accounts[2]});
	});
})