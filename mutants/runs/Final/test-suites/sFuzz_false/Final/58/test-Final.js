const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringOhBjpxK = "kmGvuPtNqtOOTrdm7cynkhjF5T5Utu4MbkbaWz168xKywFtYcg5w6VnaWtx"
		const stringdHHUaaQ = "O1JyI8gtwcoRSJOIIA1CE8OzxsIExezAuCVTjlZFdkmuxtytfL4acUHu5x"
		const uintnnHyN0v = BigInt("322")
		const FinalpuZHFRD = await Final.new(stringOhBjpxK, stringdHHUaaQ, uintnnHyN0v, {from: accounts[3]});
		const uintl7auqGc = BigInt("1690")
		const addressh3IqPOs = accounts[5]
		const uinttVNYXVa = BigInt("101")
		const addressTOTlJsu = accounts[0]
		const uintkouxtAx = await FinalpuZHFRD.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const booldFbSWR8 = await FinalpuZHFRD.transfer.call(addressh3IqPOs, uintl7auqGc, {from: accounts[4]});
		const boolrVW4ZSN = await FinalpuZHFRD.transfer.call(addressTOTlJsu, uinttVNYXVa, {from: accounts[1]});

		assert.equal(uintkouxtAx, BigInt("322000000000000000000"))
		await expect(FinalpuZHFRD.transfer.call(addressh3IqPOs, uintl7auqGc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringvLeJBiJ = "X8AAuUECuIyIWb"
		const stringWZPUXkq = "ZLGl6Wu14FCXvx5okM4NmpT9PTHSR4TagbOd"
		const uintgVNE7Ll = BigInt("96")
		const Finalm0lk1E7 = await Final.new(stringvLeJBiJ, stringWZPUXkq, uintgVNE7Ll, {from: accounts[0]});
		const uintiS7qwXI = BigInt("243")
		const addressGEINBv1 = accounts[1]
		const uintQJpmXGj = BigInt("1840")
		const addressj8yZvfo = accounts[4]
		const uintzIoagjX = BigInt("81")
		const addressw5CNPj9 = accounts[2]
		const boolu0ssCKe = await Finalm0lk1E7.increaseAllowance.call(addressGEINBv1, uintiS7qwXI, {from: accounts[3]});
		const boolU2NWJB = await Finalm0lk1E7.approve.call(addressj8yZvfo, uintQJpmXGj, {from: accounts[4]});
		const boolYWTNG5D = await Finalm0lk1E7.transfer.call(addressw5CNPj9, uintzIoagjX, {from: accounts[1]});

		await expect(Finalm0lk1E7.increaseAllowance.call(addressGEINBv1, uintiS7qwXI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringoK3mxnZ = "3VfiLHerx7wb9r0rJCIGXu43rt41Ml5ziqxEChGVXvcrfcryKkCEDOC2slCbaOSMG1UBHPdGEBz1337"
		const stringEt0AxC5 = "ojdv8nBrriJT1ppy1fFuHLcl2JNvPhfVcY1bXJbEXwePRPykKIFCBHw4fFu8use"
		const uintXBnrUQO = BigInt("62")
		const FinaloxiYfIn = await Final.new(stringoK3mxnZ, stringEt0AxC5, uintXBnrUQO, {from: accounts[1]});
		const addressuTBcNg = accounts[0]
		const uintqxj9VvX = BigInt("1633")
		const addressD0QydLS = accounts[0]
		const uintUuqFZW = await FinaloxiYfIn.balanceOf.call(addressuTBcNg, {from: accounts[3]});
		const stringI9cb0fc = await FinaloxiYfIn.name.call({from: accounts[1]});
		const booljdepKZZ = await FinaloxiYfIn.approve.call(addressD0QydLS, uintqxj9VvX, {from: accounts[3]});

		assert.equal(booljdepKZZ, true)
		assert.equal(stringI9cb0fc, "3VfiLHerx7wb9r0rJCIGXu43rt41Ml5ziqxEChGVXvcrfcryKkCEDOC2slCbaOSMG1UBHPdGEBz1337")
		assert.equal(uintUuqFZW, BigInt("0"))
	});

	it('test for Final', async () => {
		const stringWzISdPo = "Z51XEyhrJPrgubq3AuF6xkXZ1cFeaWIIHvIL71njJMUIMCofdLSnd5rUXUmJEs2aCggIjPzJRKuYrb2tz6trndxlRrWM28"
		const stringj9xHENq = "3TR"
		const uintRDu1zm = BigInt("1680")
		const Finalykimmw0 = await Final.new(stringWzISdPo, stringj9xHENq, uintRDu1zm, {from: "0x0000000000000000000000000000000000000001"});
		const uintB2l07KR = BigInt("157")
		const addressVt4XwuA = accounts[1]
		const stringQKnWbW = await Finalykimmw0.name.call({from: accounts[1]});
		const boolmOsB6k5 = await Finalykimmw0.approve.call(addressVt4XwuA, uintB2l07KR, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Final', async () => {
		const stringYSgHnBE = "CV6qENXpSK4XNTxVuV7xAhl"
		const stringJvZwFws = "8P7FuHanYOurOMbpKlwY4PdYHzKNPqP5nj"
		const uintHce8Du = BigInt("170")
		const Finalkdk2g94 = await Final.new(stringYSgHnBE, stringJvZwFws, uintHce8Du, {from: accounts[4]});
		const uintipDIm3g = BigInt("355")
		const addressTG0OgHg = accounts[4]
		const uintfJ5hpB6 = BigInt("1917")
		const addressIIolvbb = accounts[4]
		const uintAzeQ9zD = BigInt("1205")
		const addressCiKc5oV = accounts[0]
		const uintvd00QQ = BigInt("1139")
		const addressXy3JhLV = "0x0000000000000000000000000000000000000001"
		const addressu1NWaY = accounts[0]
		const boolg6D4ikp = await Finalkdk2g94.approveAndCall.call(addressTG0OgHg, uintipDIm3g, {from: accounts[2]});
		const boolI2cWVke = await Finalkdk2g94.transfer.call(addressIIolvbb, uintfJ5hpB6, {from: accounts[4]});
		const boolaKZRyUJ = await Finalkdk2g94.decreaseAllowance.call(addressCiKc5oV, uintAzeQ9zD, {from: accounts[0]});
		const boolleM64n4 = await Finalkdk2g94.transferFrom.call(addressu1NWaY, addressXy3JhLV, uintvd00QQ, {from: accounts[0]});
		const uint8IKaiKC1 = await Finalkdk2g94.decimals.call({from: accounts[4]});

		await expect(Finalkdk2g94.approveAndCall.call(addressTG0OgHg, uintipDIm3g, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringy86ITcY = "TjB1epzFUzYKkAvPdwX2jl6fNTWB4cyIfb4oBYdeI"
		const stringY0XRUxo = "XjFobrMxUBq8izN6313hb"
		const uintKhGYz6G = BigInt("1801")
		const FinaliPCSw7Z = await Final.new(stringy86ITcY, stringY0XRUxo, uintKhGYz6G, {from: accounts[1]});
		const uintBUehLET = BigInt("1828")
		const addressHna48kD = accounts[1]
		const uintR5rve4d = BigInt("556")
		const addressPaEYTnJ = accounts[5]
		const addressulrmVsz = "0x0000000000000000000000000000000000000001"
		const addressVDwadpu = accounts[5]
		const uintsplurQ = BigInt("136")
		const addressZ5hZr7K = "0x0000000000000000000000000000000000000001"
		const boolbbzdzNK = await FinaliPCSw7Z.transfer.call(addressHna48kD, uintBUehLET, {from: accounts[0]});
		const booljsbiY8 = await FinaliPCSw7Z.transferFrom.call(addressulrmVsz, addressPaEYTnJ, uintR5rve4d, {from: accounts[0]});
		const boolVzJzeNA = await FinaliPCSw7Z.transferownership.call(addressVDwadpu, {from: accounts[5]});
		const boolFxKVIiN = await FinaliPCSw7Z.approve.call(addressZ5hZr7K, uintsplurQ, {from: accounts[0]});
		const stringxCTvDP = await FinaliPCSw7Z.name.call({from: accounts[4]});

		await expect(FinaliPCSw7Z.transfer.call(addressHna48kD, uintBUehLET, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringx1Xmt1j = "4yWaKKoGmfNu"
		const stringyOc9KyV = "bx6ITMRMxbteqtK56ohvrH5gJD1ELsygrmYgrWnQ9xnpTBk57MYxtPglt2YcJurRWRGnCpU97lQGBkJVkOXMlJiiwAToPIrylH"
		const uintnsbkIMy = BigInt("459")
		const FinalwpqsJQj = await Final.new(stringx1Xmt1j, stringyOc9KyV, uintnsbkIMy, {from: accounts[5]});
		const addressO2R8AqU = accounts[3]
		const uintm7ROLs = BigInt("1994")
		const addressTXeY0ox = accounts[0]
		const uintV1JvQqH = BigInt("707")
		const addressbqiG5ys = accounts[0]
		const boolK7jSegD = await FinalwpqsJQj.transferownership.call(addressO2R8AqU, {from: accounts[5]});
		const stringimKrsxj = await FinalwpqsJQj.name.call({from: accounts[4]});
		const boolkP3h29O = await FinalwpqsJQj.transfer.call(addressTXeY0ox, uintm7ROLs, {from: accounts[1]});
		const booletQT2xo = await FinalwpqsJQj.transfer.call(addressbqiG5ys, uintV1JvQqH, {from: accounts[0]});

		assert.equal(boolK7jSegD, true)
		assert.equal(stringimKrsxj, "4yWaKKoGmfNu")
		await expect(FinalwpqsJQj.transfer.call(addressTXeY0ox, uintm7ROLs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const string4H9vT9 = "t2aQXSC6sltbJwWUfgn5uC4mbN1qUVxg3St929WfOabtxDw9S2cvJMy4nQIVmbkE6vWuCzLCNwzvWNOGxc113yDEuH3PnY"
		const stringm80K3DM = "zRkGeFF9ovFMrjeezWaqCarXNnAAMmkItfjVGlnOAoMN4PJHUOCq3dUw16qX"
		const uintSPlIpIa = BigInt("30")
		const Finalfosa6Am = await Final.new(string4H9vT9, stringm80K3DM, uintSPlIpIa, {from: accounts[5]});
		const uintQjm4S5 = BigInt("0")
		const addressYEiwoqc = accounts[5]
		const boolKOjE42S = await Finalfosa6Am.transfer.call(addressYEiwoqc, uintQjm4S5, {from: accounts[0]});
		const uintkeI5NzB = await Finalfosa6Am.totalSupply.call({from: accounts[2]});

		assert.equal(boolKOjE42S, true)
		assert.equal(uintkeI5NzB, BigInt("30000000000000000000"))
	});

	it('test for Final', async () => {
		const stringx1Xmt1j = "4yWaKKoGmfNu"
		const stringyOc9KyV = "bx6ITMRMxbteqtK56ohvrH5gJD1ELsygrmYgrWnQ9xnpTBk57MYxtPglt2YcJurRWRGnCpU97lQGBkJVkOXMlJiiwAToPIrylH"
		const uintVPTolUw = BigInt("459")
		const FinalwpqsJQj = await Final.new(stringx1Xmt1j, stringyOc9KyV, uintVPTolUw, {from: accounts[5]});
		const uintOliKDjH = BigInt("1916")
		const addressSixMAlT = accounts[5]
		const uint8Ay86V2I = await FinalwpqsJQj.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolsecRzUb = await FinalwpqsJQj.approveAndCall.call(addressSixMAlT, uintOliKDjH, {from: accounts[5]});

		assert.equal(boolsecRzUb, true)
		assert.equal(uint8Ay86V2I, BigInt("18"))
	});
})