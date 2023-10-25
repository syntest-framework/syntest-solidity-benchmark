const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintEX50uIB = BigInt("1816")
		const stringrhQk2Qc = "zB1P1l9oRzsBeQyuxhZLhwQlDsDlcNXaFMjz2xeCwGH2T6Ba98UzG5fAs1fkqRG59nEKhD6v88tRh9iZu"
		const stringvUP5U8P = "GWGbFhunWQrPC2C14Duv8Y5I67f89Xiyfhxc9AwEXNTXDEP2tgYvFZRL5CCgy41tMXY2FiQpEb3xOLeYMBU1DH3EzicP"
		const INSJCzZqNs = await INS.new(uintEX50uIB, stringrhQk2Qc, stringvUP5U8P, {from: accounts[0]});
		const uintn9Sm4Af = BigInt("982")
		const addressISZu1Gc = accounts[1]
		const uintXC0gGIo = BigInt("1925")
		const addressvA5N27Z = accounts[3]
		const uintaf6GEEA = BigInt("2002")
		const uintA1STM26 = BigInt("1571")
		const addressJyMVk0 = accounts[1]
		const boolkYku25y = await INSJCzZqNs.approve.call(addressISZu1Gc, uintn9Sm4Af, {from: accounts[0]});
		const boolSShhNvw = await INSJCzZqNs.approve.call(addressvA5N27Z, uintXC0gGIo, {from: accounts[2]});
		const bool6GKpBJ = await INSJCzZqNs.burn.call(uintaf6GEEA, {from: accounts[0]});
//		const boolEHst59U = await INSJCzZqNs.transfer.call(addressJyMVk0, uintA1STM26, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool6GKpBJ, true)
		assert.equal(boolSShhNvw, true)
		assert.equal(boolkYku25y, true)
		await expect(INSJCzZqNs.transfer.call(addressJyMVk0, uintA1STM26, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintDJgger = BigInt("1912")
		const stringz2nnHHj = "uxwMwzCTnXmVoLGo2gds818qESpdMnqQy"
		const stringYbzxohn = "nqmzIfokosQ"
		const INSKcQGfbt = await INS.new(uintDJgger, stringz2nnHHj, stringYbzxohn, {from: accounts[4]});
		const bytemORDC1G = "0x060e16150307171806161904"
		const uintdY03rpl = BigInt("1353")
		const addresszjya6tf = accounts[0]
		const byteS3BsynJ = "0x02041601010f1e19150106101a0a1a0e151d0c1c05"
		const uintHGjsxPj = BigInt("1128")
		const addressQxI0e5w = accounts[5]
		const uintko3zPP = BigInt("1068")
		const addressCQrWHeE = accounts[3]
		const uintntvMObf = BigInt("78")
		const addresswu6X7Tg = accounts[3]
//		const boolcFVG0lg = await INSKcQGfbt.approveAndCall.call(addresszjya6tf, uintdY03rpl, bytemORDC1G, {from: accounts[3]});
//		const boolpxJCh7S = await INSKcQGfbt.approveAndCall.call(addressQxI0e5w, uintHGjsxPj, byteS3BsynJ, {from: accounts[5]});
//		const boolt0Nhm33 = await INSKcQGfbt.burnFrom.call(addressCQrWHeE, uintko3zPP, {from: accounts[5]});
//		const boolCqaB85V = await INSKcQGfbt.transfer.call(addresswu6X7Tg, uintntvMObf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(INSKcQGfbt.approveAndCall.call(addresszjya6tf, uintdY03rpl, bytemORDC1G, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintFCUWjiQ = BigInt("1386")
		const stringf59kiUm = "4s4eUOQGAYXTBysc1DS"
		const stringYn9TAca = "2ReWxhqF9R0O178AB6cuIHeXxYPFHhtvUGNFRPDNdRuDp65gqy"
		const INSFcCpOfe = await INS.new(uintFCUWjiQ, stringf59kiUm, stringYn9TAca, {from: accounts[0]});
		const uint3lTKWS = BigInt("1256")
		const addressPJEqTf3 = accounts[5]
		const addressk777YUj = accounts[2]
		const byteJZAq0Gp = "0x1b000014151d050f1709001411180c050704021c091e16141612151218"
		const uintqqLzVX9 = BigInt("1735")
		const addressLYLGLiD = accounts[4]
		const uintFx5DId = BigInt("240")
		const addressicYpQr8 = accounts[2]
		const uintvOoHwa = BigInt("672")
		const addressbpf6Oy = accounts[2]
//		const booldttMEV = await INSFcCpOfe.transferFrom.call(addressk777YUj, addressPJEqTf3, uint3lTKWS, {from: "0x0000000000000000000000000000000000000001"});
//		const boolLY3HzXv = await INSFcCpOfe.approveAndCall.call(addressLYLGLiD, uintqqLzVX9, byteJZAq0Gp, {from: accounts[3]});
//		const boolniHhLnY = await INSFcCpOfe.burnFrom.call(addressicYpQr8, uintFx5DId, {from: accounts[4]});
//		const boolmvBR8B4 = await INSFcCpOfe.approve.call(addressbpf6Oy, uintvOoHwa, {from: accounts[1]});

		await expect(INSFcCpOfe.transferFrom.call(addressk777YUj, addressPJEqTf3, uint3lTKWS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintZ6sFeII = BigInt("52")
		const stringxR4NLV = "6I6I3q6P7jCGEvqqboilhiDQRlXFqe2KkHRCB2i2jx9TvOTS3JrrMHeFecIwWWSWPeen1tC5oOnDnh9pAlCUIKaHqlm3fwenWv"
		const stringI7bEWRj = "1VQPE5EnxxrEbpGCPXCwkzijf1au3nlbB5vbXmmovU0iB78w5jLgGrU1S9SlYm0EaJTaEHoSm1RQxsrNQ"
		const INSDxS6F2B = await INS.new(uintZ6sFeII, stringxR4NLV, stringI7bEWRj, {from: accounts[0]});
		const uintnMIGMqc = BigInt("223")
		const addressDWSu1Sc = accounts[0]
		const uintvjCs2Yt = BigInt("1862")
		const addresssDqQC5m = accounts[1]
		const uintZjaBJ8p = BigInt("1597")
		const addressKr4WUlx = accounts[3]
		const addressEZsQ5B = accounts[1]
		const byteGcMnnQv = "0x0b1b1e0e021811040607071101011904171800151b000c15080c120b17070914"
		const uintgAcZHa1 = BigInt("942")
		const addressTzz1pcm = accounts[5]
		const uintBrdUmzO = BigInt("199")
		const addressq4XvuOL = accounts[4]
		const uintX8cNZ6A = BigInt("1145")
//		const boolhEbjJ88 = await INSDxS6F2B.burnFrom.call(addressDWSu1Sc, uintnMIGMqc, {from: accounts[1]});
//		const boolrSFJMKC = await INSDxS6F2B.burnFrom.call(addresssDqQC5m, uintvjCs2Yt, {from: accounts[2]});
//		const boolHGOgeM = await INSDxS6F2B.transferFrom.call(addressEZsQ5B, addressKr4WUlx, uintZjaBJ8p, {from: accounts[3]});
//		const boolZCPMgo6 = await INSDxS6F2B.approveAndCall.call(addressTzz1pcm, uintgAcZHa1, byteGcMnnQv, {from: accounts[1]});
//		const boolo1dvl6 = await INSDxS6F2B.transfer.call(addressq4XvuOL, uintBrdUmzO, {from: accounts[0]});
//		const boolCRlXFt = await INSDxS6F2B.burn.call(uintX8cNZ6A, {from: accounts[3]});

		await expect(INSDxS6F2B.burnFrom.call(addressDWSu1Sc, uintnMIGMqc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uinto23flNG = BigInt("389")
		const stringtZasoKm = "3tJtNXlJgpA2jlimdjdLVCEqfFCP5d8qTVhkT8JznLYPJpeYAf9GiL0sL6pscKdImqXy5ZWOqVv1SWcg"
		const stringXhSXYs3 = "khhMJRrwVkXlCKF8wktQVA9DbHVy1kZTw4M2h0kQVO5OsV"
		const INSUFbcDur = await INS.new(uinto23flNG, stringtZasoKm, stringXhSXYs3, {from: "0x0000000000000000000000000000000000000001"});
		const uintPK0aGMr = BigInt("894")
		const addresspUUrLyi = accounts[3]
		const addressVtw2z08 = accounts[3]
		const uintEXy3w8 = BigInt("592")
		const addresso6ZMdKN = accounts[4]
		const boolGZWE5u = await INSUFbcDur.transferFrom.call(addressVtw2z08, addresspUUrLyi, uintPK0aGMr, {from: accounts[0]});
		const booleKAr6Gz = await INSUFbcDur.burnFrom.call(addresso6ZMdKN, uintEXy3w8, {from: accounts[2]});
	});

	it('test for INS', async () => {
		const uintkQCO6xK = BigInt("1386")
		const stringf59kiUm = "4s4eUOQGAYXTBysc1DS"
		const stringYn9TAca = "2ReWxhqF9R0O178AB6cuIHeXxYPFHhtvUGNFRPDNdRuDp65gqy"
		const INSFcCpOfe = await INS.new(uintkQCO6xK, stringf59kiUm, stringYn9TAca, {from: accounts[0]});
		const uintf6crFq = BigInt("625")
		const addressQTroAe = accounts[1]
		const uintZxEYGTm = BigInt("852")
		const addressqvXkEhh = "0x0000000000000000000000000000000000000002"
		const boolSvrSdD6 = await INSFcCpOfe.transfer.call(addressQTroAe, uintf6crFq, {from: accounts[0]});
//		const boolrRalsYM = await INSFcCpOfe.transfer.call(addressqvXkEhh, uintZxEYGTm, {from: accounts[4]});

		assert.equal(boolSvrSdD6, true)
		await expect(INSFcCpOfe.transfer.call(addressqvXkEhh, uintZxEYGTm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})