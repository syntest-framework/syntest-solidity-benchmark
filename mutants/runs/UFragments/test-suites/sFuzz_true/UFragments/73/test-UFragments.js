const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentswvBiZkM = await UFragments.new({from: accounts[4]});
		const uintno2Do9d = BigInt("1337")
		const addressvwu15Du = "0x0000000000000000000000000000000000000001"
		const intBCeRJYw = BigInt("907")
		const intcUE6rPf = BigInt("1662")
		const intrAM16D = BigInt("1498")
		const addressYiZ4mF9 = await UFragmentswvBiZkM.initRebase.call(addressvwu15Du, uintno2Do9d, {from: accounts[0]});
		const int256rajM62F = await UFragmentswvBiZkM.abs.call(intBCeRJYw, {from: accounts[3]});
		const int256AeiXSI9 = await UFragmentswvBiZkM.mul.call(intrAM16D, intcUE6rPf, {from: accounts[4]});

		await expect(UFragmentswvBiZkM.initRebase.call(addressvwu15Du, uintno2Do9d, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsBzlCPYt = await UFragments.new({from: accounts[4]});
		const uintt3COSDE = BigInt("1374")
		const addressX9V37j = accounts[5]
		const intvdoVAAy = BigInt("-351")
		const intMf0zsc8 = BigInt("309")
		const addressrXNk0Ed = await UFragmentsBzlCPYt.owner.call({from: accounts[4]});
		const addressYBZxMus = await UFragmentsBzlCPYt.initRebase.call(addressX9V37j, uintt3COSDE, {from: "0x0000000000000000000000000000000000000001"});
		const int256kt8YMfn = await UFragmentsBzlCPYt.mul.call(intMf0zsc8, intvdoVAAy, {from: accounts[3]});
		const uint8PEN1tYR = await UFragmentsBzlCPYt.decimals.call({from: accounts[2]});

		assert.equal(addressrXNk0Ed, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentsBzlCPYt.initRebase.call(addressX9V37j, uintt3COSDE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsAgE7T7 = await UFragments.new({from: accounts[2]});
		const intsvmYPxZ = BigInt("1665")
		const intXlcM1IP = BigInt("-997")
		const intFineKBU = BigInt("618")
		const intfzgfNmb = BigInt("-1030")
		const stringBeM1fiA = await UFragmentsAgE7T7.name.call({from: accounts[1]});
		const boolyukwpw4 = await UFragmentsAgE7T7.rebaseTimeInfo.call({from: accounts[2]});
		const int256TNUirkj = await UFragmentsAgE7T7.add.call(intXlcM1IP, intsvmYPxZ, {from: accounts[0]});
		const int256Yy3dTlh = await UFragmentsAgE7T7.mul.call(intfzgfNmb, intFineKBU, {from: accounts[0]});

		assert.equal(stringBeM1fiA, "")
		await expect(UFragmentsAgE7T7.add.call(intXlcM1IP, intsvmYPxZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsHY8B8d0 = await UFragments.new({from: accounts[1]});
		const addressM1NwHms = accounts[3]
		const intNIGNSZm = BigInt("-908")
		const intzr8jhOE = BigInt("-536")
		const addressFfgynVR = await UFragmentsHY8B8d0.owner.call({from: accounts[5]});
		const addressaFE7j6 = await UFragmentsHY8B8d0.initialize.call(addressM1NwHms, {from: accounts[3]});
		const booltTYV8uu = await UFragmentsHY8B8d0.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const int256Vapv1GU = await UFragmentsHY8B8d0.add.call(intzr8jhOE, intNIGNSZm, {from: accounts[2]});
		await UFragmentsHY8B8d0.onlyOwner.call({from: accounts[3]});

		assert.equal(addressFfgynVR, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentsHY8B8d0.initialize.call(addressM1NwHms, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsnp8CEN = await UFragments.new({from: accounts[0]});
		const addressqy74Xs = accounts[4]
		const addressfpbNG0x = accounts[4]
		const addressubmbUl2 = accounts[0]
		const stringFdhPfdc = await UFragmentsnp8CEN.symbol.call({from: accounts[2]});
		const uint256iOifeBA = await UFragmentsnp8CEN.balanceOf.call(addressqy74Xs, {from: accounts[3]});
		const addressw92kxug = await UFragmentsnp8CEN.transferOwnership.call(addressfpbNG0x, {from: accounts[3]});
		const addressifhjoBW = await UFragmentsnp8CEN.transferOwnership.call(addressubmbUl2, {from: accounts[2]});

		assert.equal(stringFdhPfdc, "")
		assert.equal(uint256iOifeBA, BigInt("0"))
		await expect(UFragmentsnp8CEN.transferOwnership.call(addressfpbNG0x, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsUxAVjr3 = await UFragments.new({from: accounts[2]});
		const intJozk1iU = BigInt("78")
		const uint256UeqqaZr = await UFragmentsUxAVjr3.calRebase.call({from: accounts[0]});
		const stringtrRpcX1 = await UFragmentsUxAVjr3.name.call({from: accounts[2]});
		const int256OrPh5l9 = await UFragmentsUxAVjr3.abs.call(intJozk1iU, {from: accounts[2]});
		const uint256WyI9mnO = await UFragmentsUxAVjr3.calRebase.call({from: accounts[4]});

		await expect(UFragmentsUxAVjr3.calRebase.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsnp8CEN = await UFragments.new({from: accounts[0]});
		const addressT1YXfm = accounts[4]
		const addressiWPaU28 = accounts[1]
		const uint8VHV2ebA = await UFragmentsnp8CEN.decimals.call({from: accounts[5]});
		const stringFdhPfdc = await UFragmentsnp8CEN.symbol.call({from: accounts[2]});
		const addressw92kxug = await UFragmentsnp8CEN.transferOwnership.call(addressT1YXfm, {from: accounts[3]});
		const addressifhjoBW = await UFragmentsnp8CEN.transferOwnership.call(addressiWPaU28, {from: accounts[2]});

		assert.equal(stringFdhPfdc, "")
		assert.equal(uint8VHV2ebA, BigInt("0"))
		await expect(UFragmentsnp8CEN.transferOwnership.call(addressT1YXfm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsnp8CEN = await UFragments.new({from: accounts[0]});
		const addresshR97usZ = accounts[4]
		const uintIv6Q7V = BigInt("1879")
		const addressVdfDlVz = accounts[1]
		const addressT1Utyk9 = accounts[5]
		const uint256iOifeBA = await UFragmentsnp8CEN.balanceOf.call(addresshR97usZ, {from: accounts[3]});
		const uint256eA4H1o = await UFragmentsnp8CEN.totalSupply.call({from: accounts[3]});
		const addressqIvFcfQ = await UFragmentsnp8CEN.initRebase.call(addressVdfDlVz, uintIv6Q7V, {from: "0x0000000000000000000000000000000000000001"});
		const addressw92kxug = await UFragmentsnp8CEN.transferOwnership.call(addressT1Utyk9, {from: accounts[3]});

		assert.equal(uint256eA4H1o, BigInt("0"))
		assert.equal(uint256iOifeBA, BigInt("0"))
		await expect(UFragmentsnp8CEN.initRebase.call(addressVdfDlVz, uintIv6Q7V, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsnp8CEN = await UFragments.new({from: accounts[0]});
		const addressvXEQuUz = accounts[5]
		const uintsLTZv4r = BigInt("1040")
		const addressbHJ0p8h = accounts[1]
		const addressY9AJfGD = "0x0000000000000000000000000000000000000001"
		const addressEDkWMIO = accounts[4]
		const uint256iOifeBA = await UFragmentsnp8CEN.balanceOf.call(addressvXEQuUz, {from: accounts[3]});
		const uint256UOhYa00 = await UFragmentsnp8CEN.totalSupply.call({from: accounts[4]});
		const boolGzcseMb = await UFragmentsnp8CEN.transferFrom.call(addressY9AJfGD, addressbHJ0p8h, uintsLTZv4r, {from: accounts[1]});
		const addressw92kxug = await UFragmentsnp8CEN.transferOwnership.call(addressEDkWMIO, {from: accounts[3]});

		assert.equal(uint256UOhYa00, BigInt("0"))
		assert.equal(uint256iOifeBA, BigInt("0"))
		await expect(UFragmentsnp8CEN.transferFrom.call(addressY9AJfGD, addressbHJ0p8h, uintsLTZv4r, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentswvBiZkM = await UFragments.new({from: accounts[4]});
		const uintNfLMdZk = BigInt("264")
		const addressJHk6Z94 = accounts[4]
		const uintCdjlGOv = BigInt("1337")
		const addressYLto8sv = "0x0000000000000000000000000000000000000000"
		const booldwMy54c = await UFragmentswvBiZkM.transfer.call(addressJHk6Z94, uintNfLMdZk, {from: accounts[3]});
		const addressYiZ4mF9 = await UFragmentswvBiZkM.initRebase.call(addressYLto8sv, uintCdjlGOv, {from: accounts[0]});

		await expect(UFragmentswvBiZkM.transfer.call(addressJHk6Z94, uintNfLMdZk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsu1RLvsO = await UFragments.new({from: accounts[3]});
		const uintLe0OkKG = BigInt("50")
		const stringodDrtd8 = "iGWgkgx2BOSym8MbXgzEiVB1i2G4C5wBmgkVcslfixUGjEWAJP5eXjbKK4d2EoPJMl"
		const stringCqIh6kN = "ityjih6BaQDLhPi7ehXzvuJ3BloNToJcZ5994kG2SzIoLM69"
		const addressFjN523S = accounts[1]
		const stringiyTDYOh = await UFragmentsu1RLvsO.initialize.call(stringCqIh6kN, stringodDrtd8, uintLe0OkKG, {from: accounts[5]});
		await UFragmentsu1RLvsO.onlyOwner.call({from: accounts[2]});
		const addressQH3Vd5 = await UFragmentsu1RLvsO.owner.call({from: accounts[5]});
		const stringh3LeW00 = await UFragmentsu1RLvsO.name.call({from: accounts[1]});
		const uint256Gae71vv = await UFragmentsu1RLvsO.balanceOf.call(addressFjN523S, {from: accounts[2]});

		await expect(UFragmentsu1RLvsO.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsTxn4PAU = await UFragments.new({from: accounts[2]});
		const uintHpWnFeG = BigInt("1092")
		const addressnbMQGcr = accounts[2]
		const uintwF9tZq9 = BigInt("1735")
		const addressL1w6xgU = accounts[1]
		const uintnXWS7zb = BigInt("2025")
		const addressGe96Cex = "0x0000000000000000000000000000000000000001"
		const addressN9LsZTS = accounts[0]
		const booldr4Gs4V = await UFragmentsTxn4PAU.approve.call(addressnbMQGcr, uintHpWnFeG, {from: accounts[1]});
		const boolTPjBjZj = await UFragmentsTxn4PAU.transfer.call(addressL1w6xgU, uintwF9tZq9, {from: accounts[1]});
		await UFragmentsTxn4PAU.onlyOwner.call({from: accounts[2]});
		const uint8Q2Envk = await UFragmentsTxn4PAU.decimals.call({from: accounts[0]});
		const addressOuG2NH8 = await UFragmentsTxn4PAU.owner.call({from: accounts[5]});
		const boolc9NDnVJ = await UFragmentsTxn4PAU.transferFrom.call(addressN9LsZTS, addressGe96Cex, uintnXWS7zb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booldr4Gs4V, true)
		await expect(UFragmentsTxn4PAU.transfer.call(addressL1w6xgU, uintwF9tZq9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentswvBiZkM = await UFragments.new({from: accounts[4]});
		const uintALjfyMq = BigInt("1337")
		const addressUELBJlf = "0x00000000000000000000000000000000000000-1"
		const addressYiZ4mF9 = await UFragmentswvBiZkM.initRebase.call(addressUELBJlf, uintALjfyMq, {from: accounts[0]});

		await expect(UFragmentswvBiZkM.initRebase.call(addressUELBJlf, uintALjfyMq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsnp8CEN = await UFragments.new({from: accounts[0]});
		const addresswilB2qu = accounts[5]
		const addressimuecM = accounts[2]
		const addressnQQzcp3 = accounts[1]
		const uint256iOifeBA = await UFragmentsnp8CEN.balanceOf.call(addresswilB2qu, {from: accounts[3]});
		const uint256eiEHd21 = await UFragmentsnp8CEN.allowance.call(addressnQQzcp3, addressimuecM, {from: accounts[0]});

		assert.equal(uint256eiEHd21, BigInt("0"))
		assert.equal(uint256iOifeBA, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragments4eza6M = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const addressVkMWg9v = accounts[0]
		const uintFeik0QD = BigInt("1438")
		const addressGbqPUsg = accounts[4]
		const addressTBAyWfW = accounts[1]
		const addressNyYYkoo = accounts[2]
		const uint256Hkzj3V6 = await UFragments4eza6M.balanceOf.call(addressVkMWg9v, {from: accounts[4]});
		const boollKE7Us9 = await UFragments4eza6M.rebaseTimeInfo.call({from: accounts[5]});
		const boolAvhyPwc = await UFragments4eza6M.transferFrom.call(addressTBAyWfW, addressGbqPUsg, uintFeik0QD, {from: accounts[5]});
		const addresseY7Llu2 = await UFragments4eza6M.transferOwnership.call(addressNyYYkoo, {from: accounts[4]});
		const stringNRwry5E = await UFragments4eza6M.symbol.call({from: accounts[2]});
	});
})