const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintPa3wfby = BigInt("1368")
		const stringHxe0WC = "Dgc4rwkoVkdwtAiLeyIuP9xIQn58gwBJONEe7dFYyKhc"
		const stringfQr1i2V = "ByucsaDw4tfdjwDnE8WsiscBEbqBwp35uhpY34MNNHdd6BUGrCLIxS9KeNpu"
		const GreenMarkTrustLnB31BT = await GreenMarkTrust.new(uintPa3wfby, stringHxe0WC, stringfQr1i2V, {from: accounts[0]});
		const byteqwBmsV = "0x011912170c11110b01151b1d16091e0907171c0d"
		const uintNRetKcK = BigInt("1749")
		const addressLhFdFP = accounts[2]
		const uintuKrUeJo = BigInt("1065")
		const addressq5cOc4e = accounts[2]
		const byteN5dMViw = "0x0a07161f0a182012170b1d19"
		const uintmzXhgPx = BigInt("973")
		const addressGLUNIP5 = accounts[5]
		const byteSqqwgc4 = "0x071916101d1d1505060f0b0f181c0e0a1c1808071a0411181108181d0f"
		const uintPaeIyG = BigInt("977")
		const addressZhUIkd = accounts[0]
		const uintaJHg32d = BigInt("692")
		const addressuPy5Yr0 = accounts[3]
		const boolQyto8C5 = await GreenMarkTrustLnB31BT.approveAndCall.call(addressLhFdFP, uintNRetKcK, byteqwBmsV, {from: accounts[1]});
		const boolg4gtOUT = await GreenMarkTrustLnB31BT.burnFrom.call(addressq5cOc4e, uintuKrUeJo, {from: "0x0000000000000000000000000000000000000001"});
		const boolUL2ePT2 = await GreenMarkTrustLnB31BT.approveAndCall.call(addressGLUNIP5, uintmzXhgPx, byteN5dMViw, {from: accounts[1]});
		const boolbWspneS = await GreenMarkTrustLnB31BT.approveAndCall.call(addressZhUIkd, uintPaeIyG, byteSqqwgc4, {from: accounts[3]});
		const boolMSI0ps6 = await GreenMarkTrustLnB31BT.burnFrom.call(addressuPy5Yr0, uintaJHg32d, {from: accounts[4]});

		await expect(GreenMarkTrustLnB31BT.approveAndCall.call(addressLhFdFP, uintNRetKcK, byteqwBmsV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintVCW642o = BigInt("1397")
		const stringiCWay7Q = "WGTxavfH5DxC5R9b7s2eV5zThNJcsk74crzCpUIInxlP0uG1izuKLc5L"
		const stringhz8RDbu = "xmwQ3iciS"
		const GreenMarkTrustVKPGbI = await GreenMarkTrust.new(uintVCW642o, stringiCWay7Q, stringhz8RDbu, {from: accounts[5]});
		const uintn2iYHX = BigInt("1249")
		const addresssSmNCnD = accounts[1]
		const uintyclQtbh = BigInt("1666")
		const addresstiQmLV = accounts[5]
		const uintlm7DEqF = BigInt("75")
		const addressYK1xRSm = accounts[0]
		const byteaFHPDS8 = "0x080b05111b"
		const uintO6Um0d = BigInt("248")
		const addressnVo8vo1 = accounts[3]
		const boolmasadtz = await GreenMarkTrustVKPGbI.transfer.call(addresssSmNCnD, uintn2iYHX, {from: accounts[3]});
		const boolkFIf8ty = await GreenMarkTrustVKPGbI.approve.call(addresstiQmLV, uintyclQtbh, {from: accounts[4]});
		const boolLTfjOkJ = await GreenMarkTrustVKPGbI.approve.call(addressYK1xRSm, uintlm7DEqF, {from: accounts[4]});
		const boolXNpkLZH = await GreenMarkTrustVKPGbI.approveAndCall.call(addressnVo8vo1, uintO6Um0d, byteaFHPDS8, {from: accounts[1]});

		await expect(GreenMarkTrustVKPGbI.transfer.call(addresssSmNCnD, uintn2iYHX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uinte1dJyhU = BigInt("1289")
		const stringGFfvmDx = "P3okj1xuS"
		const stringiBVErWZ = "0AXqC0gJqoT8Cfgmwr03ovKC7OcbSHvB7B1sCisD2zZmBLXSdEf"
		const GreenMarkTrustcM8uWjD = await GreenMarkTrust.new(uinte1dJyhU, stringGFfvmDx, stringiBVErWZ, {from: accounts[1]});
		const uintDRGJNC3 = BigInt("809")
		const byteRsATqVa = "0x1a031b03100a031317190d1e1d09150916090207201a"
		const uintQ6O9AKk = BigInt("497")
		const addressMR4EBbS = accounts[4]
		const byteQaOVo7B = "0x0406110c1712081a10120b02131515141b0a"
		const uint4A9Nbw = BigInt("887")
		const addresshe4InUK = accounts[4]
		const uintkAFutG9 = BigInt("132")
		const addressyGuyroS = accounts[3]
		const addressrzc8pfX = accounts[3]
		const uintsFLwkeQ = BigInt("713")
		const addressLeJJo0D = accounts[1]
		const boolY78I5hR = await GreenMarkTrustcM8uWjD.burn.call(uintDRGJNC3, {from: accounts[4]});
		const boolHqhqZt0 = await GreenMarkTrustcM8uWjD.approveAndCall.call(addressMR4EBbS, uintQ6O9AKk, byteRsATqVa, {from: accounts[4]});
		const boolW5tI4C5 = await GreenMarkTrustcM8uWjD.approveAndCall.call(addresshe4InUK, uint4A9Nbw, byteQaOVo7B, {from: accounts[1]});
		const boolngbJa9A = await GreenMarkTrustcM8uWjD.transferFrom.call(addressrzc8pfX, addressyGuyroS, uintkAFutG9, {from: accounts[2]});
		const boolGDKw4Rr = await GreenMarkTrustcM8uWjD.burnFrom.call(addressLeJJo0D, uintsFLwkeQ, {from: accounts[0]});

		await expect(GreenMarkTrustcM8uWjD.burn.call(uintDRGJNC3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintCJju8Bn = BigInt("191")
		const stringfJymsdn = "lYmY0YOxFJZPQKQ8v8hivj1tR3jSfKzs"
		const stringrXPwxU = "OqTlG9F8jJyov9a"
		const GreenMarkTrustjvkIG5V = await GreenMarkTrust.new(uintCJju8Bn, stringfJymsdn, stringrXPwxU, {from: accounts[3]});
		const uintkkdpKC6 = BigInt("1228")
		const addressV7u77EQ = accounts[3]
		const addressu9hr3h2 = accounts[0]
		const uintqTokBSF = BigInt("121")
		const addressja0sWpf = accounts[1]
		const uintFYtCpFL = BigInt("136")
		const addressKCBQp4 = accounts[5]
		const boolUFNxCyy = await GreenMarkTrustjvkIG5V.transferFrom.call(addressu9hr3h2, addressV7u77EQ, uintkkdpKC6, {from: accounts[2]});
		const boold44g66h = await GreenMarkTrustjvkIG5V.burnFrom.call(addressja0sWpf, uintqTokBSF, {from: accounts[1]});
		const boolrqz4hvO = await GreenMarkTrustjvkIG5V.transfer.call(addressKCBQp4, uintFYtCpFL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GreenMarkTrustjvkIG5V.transferFrom.call(addressu9hr3h2, addressV7u77EQ, uintkkdpKC6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uinty8ybZAW = BigInt("915")
		const stringxwsPHnO = "7n9iDk9x9QdBR1yE0nUn4DBDdlddRMV555daVWrFh9bzf93rf3x"
		const stringaCZzNqI = "kxkjR5G8utCxEf8yNPa9fOcufjeH21XfJtjWsJUMQQ2Mdn147HbsKU"
		const GreenMarkTrustIuBakqy = await GreenMarkTrust.new(uinty8ybZAW, stringxwsPHnO, stringaCZzNqI, {from: accounts[4]});
		const uintCeSz50l = BigInt("1097")
		const addresswo2VGWs = accounts[1]
		const boolAXcKbR7 = await GreenMarkTrustIuBakqy.burnFrom.call(addresswo2VGWs, uintCeSz50l, {from: accounts[1]});

		await expect(GreenMarkTrustIuBakqy.burnFrom.call(addresswo2VGWs, uintCeSz50l, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintyPWspXe = BigInt("1748")
		const stringKZXQOFq = "VKmgqPgNWtPOhhoscNmHWDJ3RAGMLRTjXWlzVHzMxMDaQd"
		const stringT9UmhLF = "OgiMtQrERpfAlckUe2QtA6JbHhIwCJa6JBqAdgtc2qantGgNcCVQqkkwCLgycN"
		const GreenMarkTrustjvNyWT9 = await GreenMarkTrust.new(uintyPWspXe, stringKZXQOFq, stringT9UmhLF, {from: "0x0000000000000000000000000000000000000001"});
		const byteLJkD1v = "0x1101091f1e1c1f02151012050a0219141f1e19031d121e1e0f1b17"
		const uinttc5RbU5 = BigInt("1777")
		const addressCY5USxo = accounts[2]
		const uintK2AapOV = BigInt("1199")
		const addressTpbyz6 = "0x0000000000000000000000000000000000000001"
		const boolK5qq0kO = await GreenMarkTrustjvNyWT9.approveAndCall.call(addressCY5USxo, uinttc5RbU5, byteLJkD1v, {from: accounts[1]});
		const boolWOkQyL = await GreenMarkTrustjvNyWT9.transfer.call(addressTpbyz6, uintK2AapOV, {from: accounts[1]});
	});
})