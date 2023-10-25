const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveftUNKI8 = await Revive.new({from: accounts[2]});
		const addressGRUsuJc = accounts[1]
		const addressUuCScZJ = accounts[4]
		const addressqzcxb5s = accounts[2]
		const uint2561MdbgP = await ReviveftUNKI8.getUnlockableTokens.call(addressGRUsuJc, {from: accounts[2]});
		const uint256ZAFpovg = await ReviveftUNKI8.allowance.call(addressqzcxb5s, addressUuCScZJ, {from: accounts[2]});

		assert.equal(uint2561MdbgP, BigInt("0"))
		assert.equal(uint256ZAFpovg, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviverQ00hKS = await Revive.new({from: accounts[3]});
		const uintF1w1Odw = BigInt("1650")
		const addressExtcOpU = accounts[2]
		const uintpBdMsW = BigInt("1384")
		const addressQWOCJPN = accounts[1]
		const addressNPcP2Nq = await ReviverQ00hKS.recoverERC20.call(addressExtcOpU, uintF1w1Odw, {from: accounts[1]});
		const addresscJCyJfr = await ReviverQ00hKS.owner.call({from: accounts[1]});
		const boolvFhirf = await ReviverQ00hKS.increaseAllowance.call(addressQWOCJPN, uintpBdMsW, {from: accounts[4]});

		await expect(ReviverQ00hKS.recoverERC20.call(addressExtcOpU, uintF1w1Odw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivefKYcgg4 = await Revive.new({from: accounts[0]});
		const uintXsuNUzd = BigInt("1346")
		const addressfM86FtU = accounts[1]
		const addressl3JgIK = accounts[3]
		const uintqkJM5QD = BigInt("691")
		const uintt3LbBG = BigInt("435")
		const bytebusFzW = "0x0713091e1b1c0d191b070d0f051716051705120b0d1c1c131707131b180d181d"
		const addressnTAvMD = accounts[4]
		const bytekX484O = "0x091b060b131b150b0301150012101c130a1d1a091502100817090d1d20071b0b"
		const addressbDNIR6m = accounts[2]
		const boolyvuKiFb = await RevivefKYcgg4.transferFrom.call(addressl3JgIK, addressfM86FtU, uintXsuNUzd, {from: accounts[5]});
		const boolUlZcWS = await RevivefKYcgg4.transferWithLock.call(addressnTAvMD, bytebusFzW, uintt3LbBG, uintqkJM5QD, {from: accounts[3]});
		const uint256OCWX1Jr = await RevivefKYcgg4.tokensUnlockable.call(addressbDNIR6m, bytekX484O, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RevivefKYcgg4.transferFrom.call(addressl3JgIK, addressfM86FtU, uintXsuNUzd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCgPf4gd = await Revive.new({from: accounts[5]});
		const addressd18cTBJ = accounts[2]
		const bytegN3Lj8l = "0x1f121301031e13021105010e101f20111a0d1a140c18011d180f1916181d020c"
		const addressRZxebel = "0x0000000000000000000000000000000000000001"
		const byteTYWN6DE = "0x141b1c1d08131b0b120712071e180c190e17020602051e16180418111c1d0305"
		const addressFlymqWl = "0x0000000000000000000000000000000000000001"
		const uintWR0Q65A = BigInt("431")
		const bytevo3B9WC = "0x1a0e1f0c070d0f11040a0e17171a0b070f0504140c1718060209070c1f11071d"
		const uint256zuk4mc = await ReviveCgPf4gd.getUnlockableTokens.call(addressd18cTBJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256V67gtg = await ReviveCgPf4gd.tokensLocked.call(addressRZxebel, bytegN3Lj8l, {from: accounts[1]});
		const uint256rrwJlsl = await ReviveCgPf4gd.tokensLocked.call(addressFlymqWl, byteTYWN6DE, {from: accounts[4]});
		const boolLTgQaBz = await ReviveCgPf4gd.increaseLockAmount.call(bytevo3B9WC, uintWR0Q65A, {from: accounts[2]});

		assert.equal(uint256V67gtg, BigInt("0"))
		assert.equal(uint256rrwJlsl, BigInt("0"))
		assert.equal(uint256zuk4mc, BigInt("0"))
		await expect(ReviveCgPf4gd.increaseLockAmount.call(bytevo3B9WC, uintWR0Q65A, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveRPvc5vv = await Revive.new({from: accounts[3]});
		const addressi8yagG7 = accounts[1]
		const addressUZgiSD = accounts[1]
		const uintB18Lmd = BigInt("190")
		const uintE9aKuv7 = BigInt("2023")
		const bytetsSMjUf = "0x1e1006121301140e171218011b1e02200d1b0503170a070e011f01190f0e051f"
		const addressMPGCnI1 = accounts[4]
		const uintPYnYyq = BigInt("480")
		const bytejOXQr9l = "0x140a1f151c02090d1e0f1c1a00160b0a1112060e050a0b12130c1708151a170f"
		const uintfyfYFhM = BigInt("1887")
		const uintT3uY8We = BigInt("1723")
		const byter0xEXUX = "0x09150e180b1c041e131d1709011119041c1c0b141e0b121f080a170b1b19010c"
		const addressaJ2NO8F = accounts[4]
		const uint256LK8ksBZ = await ReviveRPvc5vv.allowance.call(addressUZgiSD, addressi8yagG7, {from: "0x0000000000000000000000000000000000000001"});
		const bool4pKM5M = await ReviveRPvc5vv.transferWithLock.call(addressMPGCnI1, bytetsSMjUf, uintE9aKuv7, uintB18Lmd, {from: accounts[0]});
		const booll9Kg8V = await ReviveRPvc5vv.extendLock.call(bytejOXQr9l, uintPYnYyq, {from: accounts[2]});
		const boolJKPAI4D = await ReviveRPvc5vv.lock.call(byter0xEXUX, uintT3uY8We, uintfyfYFhM, {from: accounts[3]});
		const addresstPb8cg = await ReviveRPvc5vv.transferOwnership.call(addressaJ2NO8F, {from: accounts[1]});

		assert.equal(uint256LK8ksBZ, BigInt("0"))
		await expect(ReviveRPvc5vv.transferWithLock.call(addressMPGCnI1, bytetsSMjUf, uintE9aKuv7, uintB18Lmd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivero1pgRV = await Revive.new({from: accounts[5]});
		const addressHM1EhNl = accounts[0]
		const bytedbjazAw = "0x0a0c1e10090b060a02030703111808160a071a0d1a1f0d0e031c1714191a0917"
		const addressfQErV5Z = accounts[4]
		const addressPKHXTqi = accounts[4]
		const addresshp83iwe = accounts[0]
		const addressDSc5iMv = await Revivero1pgRV.owner.call({from: accounts[3]});
		const uint2560RNOoe = await Revivero1pgRV.unlock.call(addressHM1EhNl, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mNbOv7B = await Revivero1pgRV.totalSupply.call({from: accounts[4]});
		const uint256nwxjHgF = await Revivero1pgRV.tokensUnlockable.call(addressfQErV5Z, bytedbjazAw, {from: accounts[0]});
		const uint256kn1TYtY = await Revivero1pgRV.allowance.call(addresshp83iwe, addressPKHXTqi, {from: accounts[3]});

		assert.equal(addressDSc5iMv, 0x01Bcd5d609fb6aE88395A0554cc621802B806dD6)
		assert.equal(uint2560RNOoe, BigInt("0"))
		assert.equal(uint256kn1TYtY, BigInt("0"))
		assert.equal(uint256mNbOv7B, BigInt("3000000000000000000000000000"))
		assert.equal(uint256nwxjHgF, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveOpZSQhX = await Revive.new({from: accounts[1]});
		const addressmUH2R3G = accounts[3]
		const uintCHSanQ = BigInt("1240")
		const addresse6CBKX = accounts[3]
		const addressQAExwqn = "0x0000000000000000000000000000000000000001"
		const addressIAQQMor = accounts[5]
		const uintqhqMrCZ = BigInt("169")
		const byteh45L7Ty = "0x1c0e03160c11081f040d191210191e06160b18110309021811180f120e0f0402"
		const uint2563kDt3f = await ReviveOpZSQhX.totalBalanceOf.call(addressmUH2R3G, {from: accounts[1]});
		const boolygm1ek = await ReviveOpZSQhX.decreaseAllowance.call(addresse6CBKX, uintCHSanQ, {from: accounts[4]});
		const uint256QN3s8JY = await ReviveOpZSQhX.allowance.call(addressIAQQMor, addressQAExwqn, {from: accounts[1]});
		const boolRzgJRJA = await ReviveOpZSQhX.increaseLockAmount.call(byteh45L7Ty, uintqhqMrCZ, {from: accounts[0]});

		assert.equal(uint2563kDt3f, BigInt("0"))
		await expect(ReviveOpZSQhX.decreaseAllowance.call(addresse6CBKX, uintCHSanQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveZiYL5rO = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const addresswOjxR4M = accounts[3]
		const uintPCNCDWw = BigInt("1142")
		const addressmxL5yN = accounts[1]
		const addressaoP95SV = await ReviveZiYL5rO.owner.call({from: accounts[2]});
		const uint256Y5R2k7i = await ReviveZiYL5rO.balanceOf.call(addresswOjxR4M, {from: accounts[2]});
		const addressLzYrFxt = await ReviveZiYL5rO.recoverERC20.call(addressmxL5yN, uintPCNCDWw, {from: accounts[5]});
	});

	it('test for Revive', async () => {
		const ReviveCgPf4gd = await Revive.new({from: accounts[5]});
		const addressZFIswvh = accounts[3]
		const addressZ4zyRIc = accounts[4]
		const addresszmWwucj = accounts[1]
		const bytevjYtYVw = "0x1f121301031e13021105010e101f20111a0d1a140c18011d180f1916181d020c"
		const addressHkfatMv = "0x0000000000000000000000000000000000000001"
		const byteBpuJOm = "0x141b1c1d08131b0b120712071e180c190e17020602051e16180418111c1d0305"
		const address54xYIz = "0x0000000000000000000000000000000000000001"
		const uintoDmk4bJ = BigInt("1078")
		const byteXw4Ru8H = "0x0d191f0c0d0c1c021d011612080a0b1f171d1e010e180301031d13001c171514"
		const addresstSLUfsA = accounts[4]
		const uintqz4ThF7 = BigInt("399")
		const addressS2irBjP = accounts[0]
		const uintO9OGgNT = BigInt("431")
		const bytefM87X5c = "0x1a0e1f0c070d0f11040a0e17171a0b070f0504140c1718060209070c1f11071d"
		const uint256zuk4mc = await ReviveCgPf4gd.getUnlockableTokens.call(addressZFIswvh, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nP1tsUe = await ReviveCgPf4gd.allowance.call(addresszmWwucj, addressZ4zyRIc, {from: accounts[1]});
		await ReviveCgPf4gd.renounceOwnership.call({from: accounts[5]});
		const uint256V67gtg = await ReviveCgPf4gd.tokensLocked.call(addressHkfatMv, bytevjYtYVw, {from: accounts[1]});
		const uint256rrwJlsl = await ReviveCgPf4gd.tokensLocked.call(address54xYIz, byteBpuJOm, {from: accounts[4]});
		const uint256iAMI5lR = await ReviveCgPf4gd.tokensLockedAtTime.call(addresstSLUfsA, byteXw4Ru8H, uintoDmk4bJ, {from: accounts[0]});
		const boolIzZzW87 = await ReviveCgPf4gd.approve.call(addressS2irBjP, uintqz4ThF7, {from: accounts[5]});
		const boolLTgQaBz = await ReviveCgPf4gd.increaseLockAmount.call(bytefM87X5c, uintO9OGgNT, {from: accounts[2]});

		assert.equal(uint256nP1tsUe, BigInt("0"))
		assert.equal(uint256zuk4mc, BigInt("0"))
		await expect(ReviveCgPf4gd.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOpZSQhX = await Revive.new({from: accounts[1]});
		const addressbBKjfj = accounts[1]
		const uintj4I2GkW = BigInt("1617")
		const addressq8i3WtP = accounts[4]
		const addressaKOGSeg = accounts[4]
		const uintxEX7wgC = BigInt("575")
		const uinteZT0JZ = BigInt("1691")
		const byteN1J5bZ = "0x07071107040e0f1d1f0a1e0805130302091e0c1e17101f1c0e1c00111a1d0f04"
		const uintWk4vVTf = BigInt("1240")
		const address0dWknb = accounts[3]
		const addresscqCHTU2 = "0x0000000000000000000000000000000000000001"
		const addressMoyF9A = accounts[5]
		const uintxNDjyM = BigInt("169")
		const byteSkDDc9v = "0x1c0e03160c11081f040d191210191e06160b18110309021811180f120e0f0402"
		const uint256LiyZr5u = await ReviveOpZSQhX.unlock.call(addressbBKjfj, {from: accounts[2]});
		const boolHDOxAlV = await ReviveOpZSQhX.approve.call(addressq8i3WtP, uintj4I2GkW, {from: "0x0000000000000000000000000000000000000001"});
		const uint2563kDt3f = await ReviveOpZSQhX.totalBalanceOf.call(addressaKOGSeg, {from: accounts[1]});
		const boolyrPh1EZ = await ReviveOpZSQhX.lock.call(byteN1J5bZ, uinteZT0JZ, uintxEX7wgC, {from: accounts[1]});
		const boolygm1ek = await ReviveOpZSQhX.decreaseAllowance.call(address0dWknb, uintWk4vVTf, {from: accounts[4]});
		const uint256QN3s8JY = await ReviveOpZSQhX.allowance.call(addressMoyF9A, addresscqCHTU2, {from: accounts[1]});
		const boolRzgJRJA = await ReviveOpZSQhX.increaseLockAmount.call(byteSkDDc9v, uintxNDjyM, {from: accounts[0]});

		assert.equal(boolHDOxAlV, true)
		assert.equal(boolyrPh1EZ, true)
		assert.equal(uint2563kDt3f, BigInt("0"))
		assert.equal(uint256LiyZr5u, BigInt("0"))
		await expect(ReviveOpZSQhX.decreaseAllowance.call(address0dWknb, uintWk4vVTf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveftUNKI8 = await Revive.new({from: accounts[2]});
		const uintccfQ6PL = BigInt("78")
		const addressIdrCw2M = "0x0000000000000000000000000000000000000001"
		const addressxpZ3rf = accounts[3]
		const boolSxsPnf = await ReviveftUNKI8.increaseAllowance.call(addressIdrCw2M, uintccfQ6PL, {from: accounts[3]});
		const uint2561MdbgP = await ReviveftUNKI8.getUnlockableTokens.call(addressxpZ3rf, {from: accounts[2]});

		assert.equal(boolSxsPnf, true)
		assert.equal(uint2561MdbgP, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveSXU3By = await Revive.new({from: accounts[2]});
		const addresseDEK0wi = accounts[2]
		const uintxajfgDp = BigInt("200")
		const byteC1Zglcc = "0x19010e0c0406181d1b08090b0912050716051c092004011f1202121a1d170602"
		const bytehlhjwnM = "0x171e140b081f130510160919021409011c16050619010c030a171201010a150c"
		const addressnnBwpB = accounts[4]
		const uint256V5LxYqI = await ReviveSXU3By.totalBalanceOf.call(addresseDEK0wi, {from: accounts[0]});
		const boolcRclB8w = await ReviveSXU3By.extendLock.call(byteC1Zglcc, uintxajfgDp, {from: accounts[3]});
		const uint256HCI8BrC = await ReviveSXU3By.tokensUnlockable.call(addressnnBwpB, bytehlhjwnM, {from: accounts[1]});

		assert.equal(uint256V5LxYqI, BigInt("3000000000000000000000000000"))
		await expect(ReviveSXU3By.extendLock.call(byteC1Zglcc, uintxajfgDp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveELRjh5L = await Revive.new({from: accounts[4]});
		const uintg5yuo96 = BigInt("74")
		const uintv7sbBtr = BigInt("767")
		const addressiEk0j2 = accounts[0]
		const uintq5udX1P = BigInt("1750")
		const addressRsw8EQ = accounts[5]
		const addressrlYViM6 = await ReviveELRjh5L.owner.call({from: accounts[0]});
		const uint256Z7036z5 = await ReviveELRjh5L.recoverERC20.call(uintg5yuo96, {from: accounts[1]});
		const boolkdwfBfU = await ReviveELRjh5L.transfer.call(addressiEk0j2, uintv7sbBtr, {from: accounts[2]});
		const addressqzbnFe9 = await ReviveELRjh5L.recoverERC20.call(addressRsw8EQ, uintq5udX1P, {from: accounts[3]});
		const booly0rVthj = await ReviveELRjh5L.isOwner.call({from: accounts[3]});

		assert.equal(addressrlYViM6, 0xcc4e947A9C1a83267a8F749EfF0Dad4892A27215)
		await expect(ReviveELRjh5L.recoverERC20.call(uintg5yuo96, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveftUNKI8 = await Revive.new({from: accounts[2]});
		const uintESKfeVw = BigInt("1081")
		const addresshI4JIXS = accounts[3]
		const uintwes2Z4Q = BigInt("1749")
		const uintLwkPK2Z = BigInt("1040")
		const byteySyh0d4 = "0x14120d080e1616180a05130a1b02070a0011020f1b0d14101d171e18061e180b"
		const uint256UJ7PUsE = await ReviveftUNKI8.recoverERC20.call(uintESKfeVw, {from: accounts[2]});
		const uint2561MdbgP = await ReviveftUNKI8.getUnlockableTokens.call(addresshI4JIXS, {from: accounts[2]});
		const boolskyjvT = await ReviveftUNKI8.lock.call(byteySyh0d4, uintLwkPK2Z, uintwes2Z4Q, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveftUNKI8.recoverERC20.call(uintESKfeVw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveftUNKI8 = await Revive.new({from: accounts[2]});
		const byteAn6xAzw = "0x1105091205101e161b0c07181207150d03040b051d10110702071e161e1e121d"
		const addressvH26Rnj = accounts[3]
		const uintkk8f4uW = BigInt("1749")
		const uintVJQ4CdD = BigInt("1069")
		const byteW26vGqU = "0x14120d080e1616180a05130a1b02070a0011020f1b0d14101d171e18061e180b"
		const uint256L5nQc2N = await ReviveftUNKI8.tokensUnlockable.call(addressvH26Rnj, byteAn6xAzw, {from: accounts[1]});
		await ReviveftUNKI8.onlyOwner.call({from: accounts[5]});
		await ReviveftUNKI8.onlyOwner.call({from: accounts[3]});
		const boolskyjvT = await ReviveftUNKI8.lock.call(byteW26vGqU, uintVJQ4CdD, uintkk8f4uW, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256L5nQc2N, BigInt("0"))
		await expect(ReviveftUNKI8.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveftUNKI8 = await Revive.new({from: accounts[2]});
		const uintoVqN5Rf = BigInt("1749")
		const uintnvclz4B = BigInt("1040")
		const byteTa75BCC = "0x14120d080e1616180a05130a1b02070a0011ffffffff0f1b0d14101d171e18061e180b"
		const byteXD3rxbm = "0x041b0e20032003110a011c1206041d19130f1c07070b1211140d1e1d081c1908"
		const addressTfA2gW3 = accounts[3]
		const uintxwcGodC = BigInt("1155")
		const byteoUyN9Qw = "0x13051020031917190a1e0f201a16121c00130d17140616070d121210171c110c"
		const boolskyjvT = await ReviveftUNKI8.lock.call(byteTa75BCC, uintnvclz4B, uintoVqN5Rf, {from: "0x0000000000000000000000000000000000000001"});
		const uint256U7EhaTL = await ReviveftUNKI8.tokensUnlockable.call(addressTfA2gW3, byteXD3rxbm, {from: accounts[0]});
		const boolXspjCB1 = await ReviveftUNKI8.increaseLockAmount.call(byteoUyN9Qw, uintxwcGodC, {from: accounts[1]});
		await ReviveftUNKI8.onlyOwner.call({from: accounts[0]});

		await expect(ReviveftUNKI8.lock.call(byteTa75BCC, uintnvclz4B, uintoVqN5Rf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveftUNKI8 = await Revive.new({from: accounts[2]});
		const addressoXDavSW = accounts[2]
		const addressHAIoo3V = accounts[4]
		const addressN67zBN9 = "0x0000000000000000000000000000000000000001"
		const uintg3plfOk = BigInt("1903")
		const bytecpmKN9x = "0x1003100a0807091404010705010c0519080c1f051200181e051c19060817010a"
		const address3cWX35 = accounts[0]
		const uintm6uOt2 = BigInt("1697")
		const addressJOwifn = accounts[0]
		const uint2561MdbgP = await ReviveftUNKI8.getUnlockableTokens.call(addressoXDavSW, {from: accounts[2]});
		const uint256XHL5jyj = await ReviveftUNKI8.allowance.call(addressN67zBN9, addressHAIoo3V, {from: accounts[0]});
		const uint256IkRpU5 = await ReviveftUNKI8.recoverERC20.call(uintg3plfOk, {from: accounts[3]});
		const uint256LGcZVoQ = await ReviveftUNKI8.tokensUnlockable.call(address3cWX35, bytecpmKN9x, {from: accounts[0]});
		const boolo9YbFdy = await ReviveftUNKI8.approve.call(addressJOwifn, uintm6uOt2, {from: accounts[1]});

		assert.equal(uint2561MdbgP, BigInt("0"))
		assert.equal(uint256XHL5jyj, BigInt("0"))
		await expect(ReviveftUNKI8.recoverERC20.call(uintg3plfOk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedNiUtw = await Revive.new({from: accounts[1]});
		const uintPzsmhjp = BigInt("727")
		const addressTJfJZGe = accounts[3]
		const uint256Ze9LjZn = await RevivedNiUtw.recoverERC20.call(uintPzsmhjp, {from: accounts[0]});
		const uint256BEcGgxP = await RevivedNiUtw.totalBalanceOf.call(addressTJfJZGe, {from: accounts[4]});

		await expect(RevivedNiUtw.recoverERC20.call(uintPzsmhjp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveftUNKI8 = await Revive.new({from: accounts[2]});
		const addressuiswlRS = "0x0000000000000000000000000000000000000001"
		const addressgcb6XCC = accounts[2]
		const uintCNStRX6 = BigInt("397")
		const uintJjbzToz = BigInt("947")
		const uinthcVOFIE = BigInt("1040")
		const byteUwvhDT9 = "0x14120d080e1616180a05130a1b02070a0011020f1b0d14101d171e18061e180b"
		const uint256FjduGFx = await ReviveftUNKI8.allowance.call(addressgcb6XCC, addressuiswlRS, {from: accounts[2]});
		const uint256rKXEWbf = await ReviveftUNKI8.recoverERC20.call(uintCNStRX6, {from: "0x0000000000000000000000000000000000000001"});
		const boolskyjvT = await ReviveftUNKI8.lock.call(byteUwvhDT9, uinthcVOFIE, uintJjbzToz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256FjduGFx, BigInt("0"))
		await expect(ReviveftUNKI8.recoverERC20.call(uintCNStRX6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedNiUtw = await Revive.new({from: accounts[1]});
		const addressvMgoCDb = accounts[4]
		const uintv2b7tmJ = BigInt("53")
		const addressOdqvwmf = accounts[1]
		const uint256BEcGgxP = await RevivedNiUtw.totalBalanceOf.call(addressvMgoCDb, {from: accounts[4]});
		const uint256HQ9x3A4 = await RevivedNiUtw.recoverERC20.call(uintv2b7tmJ, {from: accounts[2]});
		const uint256isVrkl = await RevivedNiUtw.unlock.call(addressOdqvwmf, {from: accounts[1]});

		assert.equal(uint256BEcGgxP, BigInt("0"))
		await expect(RevivedNiUtw.recoverERC20.call(uintv2b7tmJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedNiUtw = await Revive.new({from: accounts[1]});
		const uintQcwDA4T = BigInt("1171")
		const addressEdhscy0 = accounts[4]
		const uint256ViFZMHK = await RevivedNiUtw.recoverERC20.call(uintQcwDA4T, {from: accounts[5]});
		const uint256BEcGgxP = await RevivedNiUtw.totalBalanceOf.call(addressEdhscy0, {from: accounts[4]});

		await expect(RevivedNiUtw.recoverERC20.call(uintQcwDA4T, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedNiUtw = await Revive.new({from: accounts[1]});
		const addressJqPqwMb = accounts[3]
		const addressDFK0AbL = accounts[2]
		const uintAUJ0pXH = BigInt("36")
		const byteXej7pkr = "0x011b0000160703021013011917180f19170c0e1d15160a08121b021f1f0a1014"
		const addressarLjQs = "0x0000000000000000000000000000000000000001"
		const uintH3TQEI = BigInt("174")
		const addressJLGi5uZ = accounts[1]
		const boolXD5p5nZ = await RevivedNiUtw.isOwner.call({from: accounts[2]});
		const uint256oBpc8Pd = await RevivedNiUtw.totalBalanceOf.call(addressJqPqwMb, {from: accounts[2]});
		const addressGI2ueI = await RevivedNiUtw.transferOwnership.call(addressDFK0AbL, {from: accounts[1]});
		const uint256JGSDcI0 = await RevivedNiUtw.tokensLockedAtTime.call(addressarLjQs, byteXej7pkr, uintAUJ0pXH, {from: accounts[0]});
		const boolw5zvmKU = await RevivedNiUtw.approve.call(addressJLGi5uZ, uintH3TQEI, {from: accounts[5]});

		assert.equal(boolXD5p5nZ, false)
		assert.equal(boolw5zvmKU, true)
		assert.equal(uint256JGSDcI0, BigInt("0"))
		assert.equal(uint256oBpc8Pd, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveftUNKI8 = await Revive.new({from: accounts[2]});
		const uintuLwpwVh = BigInt("1875")
		const uintkURwFj = BigInt("428")
		const bytenaSZfdk = "0x0a1d0601111f151d001e0d1320011a08151401080109021e0911041c0f1b0216"
		const uintl37VG8C = BigInt("952")
		const addressGqgZQUP = "0x0000000000000000000000000000000000000001"
		const uintzyd8vYI = BigInt("655")
		const addresskmMIgZF = accounts[0]
		const uint256LJK5DEi = await ReviveftUNKI8.recoverERC20.call(uintuLwpwVh, {from: accounts[4]});
		const boolvZSPgMA = await ReviveftUNKI8.increaseLockAmount.call(bytenaSZfdk, uintkURwFj, {from: accounts[3]});
		const boolwFfce91 = await ReviveftUNKI8.transfer.call(addressGqgZQUP, uintl37VG8C, {from: accounts[0]});
		const boolzcTFa6 = await ReviveftUNKI8.transfer.call(addresskmMIgZF, uintzyd8vYI, {from: accounts[4]});

		await expect(ReviveftUNKI8.recoverERC20.call(uintuLwpwVh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedNiUtw = await Revive.new({from: accounts[1]});
		const uintepEQzWH = BigInt("65")
		const uintwM1pDm3 = BigInt("733")
		const byteKDTIj4N = "0x00180b12081a1320180c020f1b0e1e0320101a150712030c07121f0b1407061a"
		const addressG2AWnu3 = accounts[4]
		const byteilKJxag = "0x1f14140e1e1c10141e1b060e141117170703081f0e011811000605161e07191a"
		const addressezdl3D0 = accounts[4]
		const uintMXoRR8J = BigInt("36")
		const bytexl0WUso = "0x011b0000160703021013011917180f19170c0e1d15160a08121b021f1f0a1014"
		const addressQST6pcr = "0x00000000000000000000000000000000000000-1"
		const uint256aFvwepn = await RevivedNiUtw.recoverERC20.call(uintepEQzWH, {from: accounts[2]});
		const uint256aO0PRGY = await RevivedNiUtw.tokensLockedAtTime.call(addressG2AWnu3, byteKDTIj4N, uintwM1pDm3, {from: accounts[1]});
		const uint256oMwPXdm = await RevivedNiUtw.tokensLocked.call(addressezdl3D0, byteilKJxag, {from: accounts[5]});
		const uint256JGSDcI0 = await RevivedNiUtw.tokensLockedAtTime.call(addressQST6pcr, bytexl0WUso, uintMXoRR8J, {from: accounts[0]});

		await expect(RevivedNiUtw.recoverERC20.call(uintepEQzWH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCV0lSBy = await Revive.new({from: accounts[3]});
		const uintYiVdVjh = BigInt("1018")
		const addressBY2fglK = accounts[2]
		const uintBBxwBGI = BigInt("1257")
		const addresslPHhNin = accounts[0]
		const boolPmAzQka = await ReviveCV0lSBy.transfer.call(addressBY2fglK, uintYiVdVjh, {from: accounts[3]});
		const uint256Bg7Pm0 = await ReviveCV0lSBy.recoverERC20.call(uintBBxwBGI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jlb6dWp = await ReviveCV0lSBy.unlock.call(addresslPHhNin, {from: accounts[1]});

		assert.equal(boolPmAzQka, true)
		await expect(ReviveCV0lSBy.recoverERC20.call(uintBBxwBGI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveftUNKI8 = await Revive.new({from: accounts[2]});
		const uintZfkgBd0 = BigInt("1991")
		const addressQTYZXFe = accounts[2]
		const uintovw5zdj = BigInt("1543")
		const addressWIx7dk = accounts[4]
		const uintLPwuQl5 = BigInt("367")
		const uintJ216Q0H = BigInt("1180")
		const byte6eCo5s = "0x071817100f0212140d1f121405050e1604181417011e0d14040e050e1b1d0f0e"
		const address0inGG0 = accounts[2]
		const uint256hWbB1kD = await ReviveftUNKI8.recoverERC20.call(uintZfkgBd0, {from: accounts[3]});
		const uint2561MdbgP = await ReviveftUNKI8.getUnlockableTokens.call(addressQTYZXFe, {from: accounts[2]});
		const boollg26ZRu = await ReviveftUNKI8.increaseAllowance.call(addressWIx7dk, uintovw5zdj, {from: accounts[0]});
		const boolZCZ74PZ = await ReviveftUNKI8.transferWithLock.call(address0inGG0, byte6eCo5s, uintJ216Q0H, uintLPwuQl5, {from: accounts[3]});

		await expect(ReviveftUNKI8.recoverERC20.call(uintZfkgBd0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveftUNKI8 = await Revive.new({from: accounts[2]});
		const uintQUjui0D = BigInt("862")
		const uintEv6ovTB = BigInt("1749")
		const uintOW1jbi = BigInt("1040")
		const bytesnkABak = "0x14120d080e1616180a05130a1b02090a0011020f1b0d14101d171e18061e180b"
		const addressVid0eT = accounts[0]
		const addressE0uI6ho = accounts[5]
		const uint256UuP0gNN = await ReviveftUNKI8.recoverERC20.call(uintQUjui0D, {from: accounts[3]});
		const boolskyjvT = await ReviveftUNKI8.lock.call(bytesnkABak, uintOW1jbi, uintEv6ovTB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xSn5WvK = await ReviveftUNKI8.allowance.call(addressE0uI6ho, addressVid0eT, {from: accounts[0]});

		await expect(ReviveftUNKI8.recoverERC20.call(uintQUjui0D, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveftUNKI8 = await Revive.new({from: accounts[2]});
		const uintGwkRiMd = BigInt("140")
		const addressq3ncYG3 = accounts[0]
		const addresstFHUDvq = accounts[4]
		const addressO38IQES = accounts[2]
		const uintYxSSDJa = BigInt("456")
		const addressWy87Vxh = accounts[5]
		const addressizMQIPe = await ReviveftUNKI8.recoverERC20.call(addressq3ncYG3, uintGwkRiMd, {from: accounts[2]});
		const uint256XxWJlsl = await ReviveftUNKI8.balanceOf.call(addresstFHUDvq, {from: accounts[1]});
		const uint2561MdbgP = await ReviveftUNKI8.getUnlockableTokens.call(addressO38IQES, {from: accounts[2]});
		const boolIeSkuJ4 = await ReviveftUNKI8.transfer.call(addressWy87Vxh, uintYxSSDJa, {from: accounts[3]});

		await expect(ReviveftUNKI8.recoverERC20.call(addressq3ncYG3, uintGwkRiMd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedNiUtw = await Revive.new({from: accounts[1]});
		const uintOvfmvqy = BigInt("646")
		const uintIHsmXsl = BigInt("518")
		const addressJs4VMXc = accounts[0]
		const addressR1m7TUt = accounts[3]
		const uint256YJhOGs = await RevivedNiUtw.recoverERC20.call(uintOvfmvqy, {from: accounts[0]});
		const addressHMm7UOp = await RevivedNiUtw.recoverERC20.call(addressJs4VMXc, uintIHsmXsl, {from: accounts[0]});
		const uint256BEcGgxP = await RevivedNiUtw.totalBalanceOf.call(addressR1m7TUt, {from: accounts[4]});

		await expect(RevivedNiUtw.recoverERC20.call(uintOvfmvqy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivebDk5hDf = await Revive.new({from: accounts[1]});
		const uintIVbKRKU = BigInt("1094")
		const uintn9T8TAI = BigInt("840")
		const addressOQmQyEI = accounts[2]
		const uintII2QI5W = BigInt("676")
		const addressuXbvv7d = accounts[1]
		const uint256Id6JebQ = await RevivebDk5hDf.recoverERC20.call(uintIVbKRKU, {from: accounts[0]});
		const boolhrgVrmA = await RevivebDk5hDf.isOwner.call({from: accounts[3]});
		const boolY9cJIEt = await RevivebDk5hDf.increaseAllowance.call(addressOQmQyEI, uintn9T8TAI, {from: accounts[4]});
		const bools9PEJtI = await RevivebDk5hDf.approve.call(addressuXbvv7d, uintII2QI5W, {from: accounts[0]});

		await expect(RevivebDk5hDf.recoverERC20.call(uintIVbKRKU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedNiUtw = await Revive.new({from: accounts[1]});
		const uintcNX2VBl = BigInt("24")
		const byteuFNhwKk = "0x011b0000160703021013fffffffe1917180f19170c0e1d15160a08121b021f1f0a1014"
		const addressgUAZ76k = "0x0000000000000000000000000000000000000000"
		const uint256JGSDcI0 = await RevivedNiUtw.tokensLockedAtTime.call(addressgUAZ76k, byteuFNhwKk, uintcNX2VBl, {from: accounts[0]});
		const boolPfN2flQ = await RevivedNiUtw.isOwner.call({from: accounts[4]});

		await expect(RevivedNiUtw.tokensLockedAtTime.call(addressgUAZ76k, byteuFNhwKk, uintcNX2VBl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivePXwvSBK = await Revive.new({from: accounts[2]});
		const byteSDMu96R = "0x070d091805010a0e0f0f050316030b120e061a1d171208120c06160e17011502"
		const addressTrWsojG = accounts[2]
		const uintF8QBVGt = BigInt("703")
		const uinta8gXuCc = BigInt("1255")
		const uintaSd02kA = BigInt("1530")
		const addressZIyz9nO = "0x0000000000000000000000000000000000000001"
		const addressec58gTb = accounts[0]
		const uint256jIdVB62 = await RevivePXwvSBK.tokensLocked.call(addressTrWsojG, byteSDMu96R, {from: accounts[4]});
		const uint256Or6Sdwe = await RevivePXwvSBK.recoverERC20.call(uintF8QBVGt, {from: "0x0000000000000000000000000000000000000001"});
		const uint256HA2Ii8W = await RevivePXwvSBK.recoverERC20.call(uinta8gXuCc, {from: accounts[4]});
		const boolYuAYRR = await RevivePXwvSBK.transferFrom.call(addressec58gTb, addressZIyz9nO, uintaSd02kA, {from: accounts[2]});

		assert.equal(uint256jIdVB62, BigInt("0"))
		await expect(RevivePXwvSBK.recoverERC20.call(uintF8QBVGt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYTX9tK4 = await Revive.new({from: accounts[1]});
		const uintfTZF3aM = BigInt("1045")
		const uintZcULE0X = BigInt("1762")
		const byteUr5yAB = "0x05141d090c0f031a0510051405042010141b070c021e1a1514040a1d01080918"
		const uintVnNBW5H = BigInt("407")
		const bytetTXFpF4 = "0x0105040c0e161813101b0704160e120c0702051e151b0b191d0e1d18061b0f1d"
		const addressnWJAgHx = accounts[1]
		const uint256CGyizOn = await ReviveYTX9tK4.recoverERC20.call(uintfTZF3aM, {from: accounts[0]});
		const boolCfeEYrc = await ReviveYTX9tK4.extendLock.call(byteUr5yAB, uintZcULE0X, {from: accounts[3]});
		const uint256l4NhSAv = await ReviveYTX9tK4.tokensLockedAtTime.call(addressnWJAgHx, bytetTXFpF4, uintVnNBW5H, {from: accounts[5]});

		await expect(ReviveYTX9tK4.recoverERC20.call(uintfTZF3aM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedNiUtw = await Revive.new({from: accounts[1]});
		const uintTT8H7WI = BigInt("12")
		const byteawhV0jL = "0x131a201b0515190a141f0715141d09151f0a1607090819191d0d0905190e1507"
		const addressYkkmYhO = accounts[2]
		const uintuT6O947 = BigInt("15")
		const byteGgrc1Ud = "0x011b00001b0703021013011917180f19170c0e1d15160a08121b021f1f0a1014"
		const addressfYPtguJ = "0x00000000000000000000000000000000000000-1"
		const uintHC5UYMj = BigInt("4")
		const uint256tkDqi8M = await RevivedNiUtw.tokensLockedAtTime.call(addressYkkmYhO, byteawhV0jL, uintTT8H7WI, {from: accounts[1]});
		const uint256JGSDcI0 = await RevivedNiUtw.tokensLockedAtTime.call(addressfYPtguJ, byteGgrc1Ud, uintuT6O947, {from: accounts[0]});
		const addressuNwA4RU = await RevivedNiUtw.owner.call({from: accounts[4]});
		const uint256I1ufaPM = await RevivedNiUtw.totalSupply.call({from: accounts[5]});
		const uint256CiYBeYu = await RevivedNiUtw.recoverERC20.call(uintHC5UYMj, {from: accounts[4]});

		assert.equal(uint256tkDqi8M, BigInt("0"))
		await expect(RevivedNiUtw.tokensLockedAtTime.call(addressfYPtguJ, byteGgrc1Ud, uintuT6O947, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})