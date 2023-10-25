const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringgl8DhkU = "qopmjU3wP3lJVnwzyDsTNEaFqXVzDcKtiq5t9SHB74PPLHwoC2kQ899wasC"
		const stringQDZn4MY = "igyaCLGRsDEAUubbpCgEtd8QuoNzMWtfgCq53xgQXtOD"
		const uintHequPTQ = BigInt("1346")
		const FinalGYYwnG = await Final.new(stringgl8DhkU, stringQDZn4MY, uintHequPTQ, {from: accounts[2]});
		const addressoml4Lj = accounts[1]
		const addressUIreWET = accounts[4]
		const uintsqJLTj = BigInt("1324")
		const addressmohLti = accounts[1]
		const stringqCv90vg = await FinalGYYwnG.name.call({from: accounts[0]});
		const stringzIibuzh = await FinalGYYwnG.name.call({from: accounts[2]});
		const uintHqEad5g = await FinalGYYwnG.allowance.call(addressUIreWET, addressoml4Lj, {from: accounts[2]});
//		const boolVUn3UZ = await FinalGYYwnG.decreaseAllowance.call(addressmohLti, uintsqJLTj, {from: accounts[0]});
//		const stringY13lQdg = await FinalGYYwnG.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringqCv90vg, "qopmjU3wP3lJVnwzyDsTNEaFqXVzDcKtiq5t9SHB74PPLHwoC2kQ899wasC")
		assert.equal(stringzIibuzh, "qopmjU3wP3lJVnwzyDsTNEaFqXVzDcKtiq5t9SHB74PPLHwoC2kQ899wasC")
		assert.equal(uintHqEad5g, BigInt("0"))
		await expect(FinalGYYwnG.decreaseAllowance.call(addressmohLti, uintsqJLTj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringxjPeRtm = "iTx2rh1Ixq"
		const stringMnkxHr = "iVo8d7IDkikavffAONdD3CcyFPYCwjjCcvzA4jTLa1hEcfzKPHNgkIBSymu5gEt5xMKkW5vj"
		const uintLbyvQD = BigInt("1498")
		const FinalldQitV4 = await Final.new(stringxjPeRtm, stringMnkxHr, uintLbyvQD, {from: accounts[5]});
		const addresspGuri0D = accounts[4]
		const addressnwMFnWf = accounts[3]
		const addressGf2tLq = accounts[3]
		const uintqueelxJ = BigInt("544")
		const address83f89Z = accounts[5]
		const addressOiX1Ufo = accounts[4]
		const addressbubpEHl = accounts[5]
		const addressfw6fI2z = accounts[5]
		const uintpPhsZg7 = BigInt("1635")
		const addressmnjCC0i = accounts[3]
		const uinteQ2h35F = BigInt("590")
		const addressVrvhCT5 = accounts[2]
		const uintjOWdQwJ = await FinalldQitV4.balanceOf.call(addresspGuri0D, {from: accounts[2]});
		const uintn21tpU5 = await FinalldQitV4.allowance.call(addressGf2tLq, addressnwMFnWf, {from: accounts[3]});
//		const boolowuDtGS = await FinalldQitV4.transferFrom.call(addressOiX1Ufo, address83f89Z, uintqueelxJ, {from: accounts[4]});
//		const uinttnKQWy7 = await FinalldQitV4.allowance.call(addressfw6fI2z, addressbubpEHl, {from: accounts[5]});
//		const bool76rQvb = await FinalldQitV4.approve.call(addressmnjCC0i, uintpPhsZg7, {from: accounts[3]});
//		const boolmo6f8uu = await FinalldQitV4.approve.call(addressVrvhCT5, uinteQ2h35F, {from: accounts[0]});

		assert.equal(uintjOWdQwJ, BigInt("0"))
		assert.equal(uintn21tpU5, BigInt("0"))
		await expect(FinalldQitV4.transferFrom.call(addressOiX1Ufo, address83f89Z, uintqueelxJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringOO3D97k = "DlJj8HiVP3Tv7ag65SXEumgjL9WR856WA"
		const stringxm03ygv = "kcenhRl8hJAf7g4lmKRWIXc8C0uNrIcAbprpSMJuetTkuY"
		const uinti0F3ofk = BigInt("242")
		const FinalwXmuLoY = await Final.new(stringOO3D97k, stringxm03ygv, uinti0F3ofk, {from: accounts[0]});
		const addressRTApL1 = accounts[0]
		const uintEw9qksl = BigInt("499")
		const addressKN32YeF = accounts[2]
		const uintm16WrH = BigInt("3")
		const addresskCGcaDV = accounts[5]
//		const boolNu3uB0G = await FinalwXmuLoY.transferownership.call(addressRTApL1, {from: accounts[5]});
//		const stringJ6h1ONP = await FinalwXmuLoY.name.call({from: accounts[4]});
//		const stringmMcQhC = await FinalwXmuLoY.name.call({from: accounts[0]});
//		const boolTUOQJYK = await FinalwXmuLoY.approve.call(addressKN32YeF, uintEw9qksl, {from: accounts[0]});
//		const boolcZaZAnG = await FinalwXmuLoY.transfer.call(addresskCGcaDV, uintm16WrH, {from: accounts[4]});

		await expect(FinalwXmuLoY.transferownership.call(addressRTApL1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringAJXgRlx = "aPII5QOOuBAEAWF1PjhGmSspEpCvXbj6B8fpYmskVx21bL7oYO24FzRdqLFCNMJMv7TW"
		const stringBIoCP0b = "ByfYBLTJgSSWhAz1Y4j6AxD17fiTnOVLdb0EHpBnGikYf5"
		const uintS6iKu16 = BigInt("137")
		const FinalWZXjye = await Final.new(stringAJXgRlx, stringBIoCP0b, uintS6iKu16, {from: "0x0000000000000000000000000000000000000001"});
		const uintd2130p = BigInt("225")
		const addressS1yD8PS = accounts[3]
		const addressLk3dQyp = "0x0000000000000000000000000000000000000001"
		const boolYq1Iqg2 = await FinalWZXjye.transferFrom.call(addressLk3dQyp, addressS1yD8PS, uintd2130p, {from: accounts[3]});
		const stringzaIJ2KJ = await FinalWZXjye.symbol.call({from: accounts[3]});
	});

	it('test for Final', async () => {
		const stringfqSPiVI = "zoKqwwfYknTTjFlP3dUAz7Uom4ANkh7znEN67eMAxiGsVKCEzgfyaU7JoqNSe8JkRBE"
		const stringHpGRsok = "OpFB0RltuCTJ8C3a2jGceTO5TVuD3bwKJ6A9len9xLT25pkkzC54Ml3xBPgV0OD4u6MlgJyYwfmdx9CjRROecTpKLpnaOS68"
		const uintPo4Lh8 = BigInt("56")
		const FinalX72F03W = await Final.new(stringfqSPiVI, stringHpGRsok, uintPo4Lh8, {from: accounts[1]});
		const uintvxpI0LG = BigInt("35")
		const address5UHema = accounts[1]
		const uintDw7O57Z = BigInt("2014")
		const addressLERI6Yc = accounts[2]
		const uintICDVe2c = await FinalX72F03W.totalSupply.call({from: accounts[1]});
		const stringvYiclmW = await FinalX72F03W.symbol.call({from: accounts[2]});
		const boolZJoU5dm = await FinalX72F03W.approveAndCall.call(address5UHema, uintvxpI0LG, {from: accounts[1]});
//		const boolIjMKUdk = await FinalX72F03W.decreaseAllowance.call(addressLERI6Yc, uintDw7O57Z, {from: accounts[3]});
//		const uinttXHGzp = await FinalX72F03W.totalSupply.call({from: accounts[1]});
//		const uintJ5eyJJp = await FinalX72F03W.totalSupply.call({from: accounts[4]});

		assert.equal(boolZJoU5dm, true)
		assert.equal(stringvYiclmW, "OpFB0RltuCTJ8C3a2jGceTO5TVuD3bwKJ6A9len9xLT25pkkzC54Ml3xBPgV0OD4u6MlgJyYwfmdx9CjRROecTpKLpnaOS68")
		assert.equal(uintICDVe2c, BigInt("56000000000000000000"))
		await expect(FinalX72F03W.decreaseAllowance.call(addressLERI6Yc, uintDw7O57Z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringKZa0ws = "FijwY6a1nfWtuQyjjcKlzJmXJdC"
		const stringPmB9mMk = "MViU0LpPnJcbYcQ7"
		const uintyKpCswg = BigInt("222")
		const FinalP9wbyiL = await Final.new(stringKZa0ws, stringPmB9mMk, uintyKpCswg, {from: accounts[2]});
		const uintRsYXihu = BigInt("1176")
		const addresswpzvV6 = accounts[5]
		const addressETfCfkQ = accounts[5]
		const addressQQbB9IK = accounts[1]
		const uintY0Ji2bp = BigInt("2020")
		const addressd2e6t8x = accounts[3]
		const uintB4MvldG = BigInt("254")
		const addressKeoh6ax = accounts[0]
		const uintgrFiF2F = BigInt("534")
		const addressayKDqc = accounts[3]
		const bool1sm3Ut = await FinalP9wbyiL.approve.call(addresswpzvV6, uintRsYXihu, {from: accounts[0]});
		const uintbTRDK2x = await FinalP9wbyiL.allowance.call(addressQQbB9IK, addressETfCfkQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolqAXOPL6 = await FinalP9wbyiL.increaseAllowance.call(addressd2e6t8x, uintY0Ji2bp, {from: accounts[5]});
//		const boolmOb3pM4 = await FinalP9wbyiL.approveAndCall.call(addressKeoh6ax, uintB4MvldG, {from: accounts[4]});
//		const uint8kQeP72M = await FinalP9wbyiL.decimals.call({from: accounts[0]});
//		const booleOSW24C = await FinalP9wbyiL.decreaseAllowance.call(addressayKDqc, uintgrFiF2F, {from: accounts[5]});

		assert.equal(bool1sm3Ut, true)
		assert.equal(uintbTRDK2x, BigInt("0"))
		await expect(FinalP9wbyiL.increaseAllowance.call(addressd2e6t8x, uintY0Ji2bp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringfqSPiVI = "zoKqwwfYknTTjFlP3dUAz7Uom4ANkh7znEN67eMAxiGsVKCEzgfyaU7JoqNSe8JkRBE"
		const stringHpGRsok = "OpFB0RltuCTJ8C3a2jGceTO5TVuD3bwKJ6A9len9xLT25pkkzC54Ml3xBPgV0OD4u6MlgJyYwfmdx9CjRROecTpKLpnaOS68"
		const uintDIZ33Lp = BigInt("56")
		const FinalX72F03W = await Final.new(stringfqSPiVI, stringHpGRsok, uintDIZ33Lp, {from: accounts[1]});
		const uintBMiQ951 = BigInt("1670")
		const addressfadaWkZ = accounts[0]
		const uintZq9z3JG = BigInt("35")
		const addressIrfXXg0 = accounts[1]
		const uintwVvwFBR = BigInt("2007")
		const addressbnHQpWN = accounts[2]
		const uintICDVe2c = await FinalX72F03W.totalSupply.call({from: accounts[1]});
		const stringvYiclmW = await FinalX72F03W.symbol.call({from: accounts[2]});
//		const boolzH15FRr = await FinalX72F03W.transfer.call(addressfadaWkZ, uintBMiQ951, {from: "0x0000000000000000000000000000000000000001"});
//		const boolZJoU5dm = await FinalX72F03W.approveAndCall.call(addressIrfXXg0, uintZq9z3JG, {from: accounts[1]});
//		const boolIjMKUdk = await FinalX72F03W.decreaseAllowance.call(addressbnHQpWN, uintwVvwFBR, {from: accounts[3]});
//		const uinttXHGzp = await FinalX72F03W.totalSupply.call({from: accounts[1]});
//		const uintJ5eyJJp = await FinalX72F03W.totalSupply.call({from: accounts[4]});

		assert.equal(stringvYiclmW, "OpFB0RltuCTJ8C3a2jGceTO5TVuD3bwKJ6A9len9xLT25pkkzC54Ml3xBPgV0OD4u6MlgJyYwfmdx9CjRROecTpKLpnaOS68")
		assert.equal(uintICDVe2c, BigInt("56000000000000000000"))
		await expect(FinalX72F03W.transfer.call(addressfadaWkZ, uintBMiQ951, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringfqSPiVI = "zoKqwwfYknTTjFlP3dUAz7Uom4ANkh7znEN67eMAxiGsVKCEzgfyaU7JoqNSe8JkRBE"
		const stringHpGRsok = "OpFB0RltuCTJ8C3a2jGceTO5TVuD3bwKJ6A9len9xLT25pkkzC54Ml3xBPgV0OD4u6MlgJyYwfmdx9CjRROecTpKLpnaOS68"
		const uintCd1LIl2 = BigInt("56")
		const FinalX72F03W = await Final.new(stringfqSPiVI, stringHpGRsok, uintCd1LIl2, {from: accounts[1]});
		const uint481KOJ = BigInt("0")
		const addressaDutjY = accounts[1]
		const addressMBzOQft = accounts[3]
		const stringvYiclmW = await FinalX72F03W.symbol.call({from: accounts[2]});
		const boolZJoU5dm = await FinalX72F03W.approveAndCall.call(addressaDutjY, uint481KOJ, {from: accounts[1]});
		const uintJ5eyJJp = await FinalX72F03W.totalSupply.call({from: accounts[4]});
		const boolPYxdNHO = await FinalX72F03W.transferownership.call(addressMBzOQft, {from: accounts[1]});

		assert.equal(boolPYxdNHO, true)
		assert.equal(boolZJoU5dm, true)
		assert.equal(stringvYiclmW, "OpFB0RltuCTJ8C3a2jGceTO5TVuD3bwKJ6A9len9xLT25pkkzC54Ml3xBPgV0OD4u6MlgJyYwfmdx9CjRROecTpKLpnaOS68")
		assert.equal(uintJ5eyJJp, BigInt("56000000000000000000"))
	});

	it('test for Final', async () => {
		const stringpUJpgwV = "bRiFW5ycPCYcTo8ArJ8SM5wTt7KPIg6pdxG4MqHFHXpXNB2"
		const stringLW2eEpG = "vln99oXz2RPEG0EHpVAeUghjPdTuNa4wNzVtA3n4uRQqSm64"
		const uintb3qmbrs = BigInt("245")
		const FinalHKb83Ai = await Final.new(stringpUJpgwV, stringLW2eEpG, uintb3qmbrs, {from: accounts[3]});
		const uintoxllBjc = BigInt("0")
		const addresslgKCbZ1 = accounts[4]
		const addressz9dxMTT = accounts[5]
		const uintsD5xFon = BigInt("1226")
		const address190V9g = accounts[1]
		const uintHPEW4j = BigInt("1300")
		const addressAEMcQvd = accounts[6]
		const boolWnbMCKY = await FinalHKb83Ai.transferFrom.call(addressz9dxMTT, addresslgKCbZ1, uintoxllBjc, {from: "0x0000000000000000000000000000000000000001"});
		const stringxKdW9MO = await FinalHKb83Ai.symbol.call({from: accounts[0]});
//		const boolGet6uGi = await FinalHKb83Ai.transfer.call(address190V9g, uintsD5xFon, {from: accounts[2]});
//		const boolyterwYD = await FinalHKb83Ai.approve.call(addressAEMcQvd, uintHPEW4j, {from: accounts[3]});

		assert.equal(boolWnbMCKY, true)
		assert.equal(stringxKdW9MO, "vln99oXz2RPEG0EHpVAeUghjPdTuNa4wNzVtA3n4uRQqSm64")
		await expect(FinalHKb83Ai.transfer.call(address190V9g, uintsD5xFon, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})