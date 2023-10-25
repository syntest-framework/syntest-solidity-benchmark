const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const addressTWfG30L = accounts[1]
		const addressgZMnNj = accounts[1]
		const addresspTv9jvI = accounts[1]
		const addressTefgud = accounts[5]
		const address7IZZ2F = accounts[5]
		const addresspgIN0lT = accounts[2]
		const addressBXacQDJ = "0x0000000000000000000000000000000000000001"
		const addresstLSM5yh = accounts[1]
		const addressYB9IvS4 = accounts[3]
		const uintXwZz21p = BigInt("954")
		const uintjrertgq = BigInt("940")
		const addressneYzpzO = accounts[0]
		const DmmControllerV2UpgT1J7 = await DmmControllerV2.new(addressTWfG30L, addressgZMnNj, addresspTv9jvI, addressTefgud, address7IZZ2F, addresspgIN0lT, addressBXacQDJ, addresstLSM5yh, addressYB9IvS4, uintXwZz21p, uintjrertgq, addressneYzpzO, {from: accounts[0]});
		const uintOsROK2T = BigInt("1160")
		const uintFVXY5F = BigInt("309")
		const uintDNLbJPk = BigInt("1357")
		const 
n7kNFKV = await DmmControllerV2UpgT1J7.adminWithdrawFunds.call(uintFVXY5F, uintOsROK2T, {from: accounts[4]});
		const uintNux7lSH = await DmmControllerV2UpgT1J7.setMinCollateralization.call(uintDNLbJPk, {from: accounts[3]});
		await DmmControllerV2UpgT1J7.renounceOwnership.call({from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const DmmControllerV2cyqMi20 = await DmmControllerV2.new({from: accounts[1]});
		const uintj2TW0Ua = BigInt("973")
		const addressjKzouQS = accounts[3]
		const uintclU4PH = await DmmControllerV2cyqMi20.disableMarket.call(uintj2TW0Ua, {from: accounts[0]});
		const uintI2u07H7 = await DmmControllerV2cyqMi20.getInterestRateByUnderlyingTokenAddress.call(addressjKzouQS, {from: accounts[3]});
		await DmmControllerV2cyqMi20.renounceGuardian.call({from: accounts[0]});
		await DmmControllerV2cyqMi20.whenPaused.call({from: accounts[3]});
		await DmmControllerV2cyqMi20.onlyOwnerOrGuardian.call({from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressGcBQbVJ = accounts[3]
		const addressIedczZm = accounts[0]
		const address22FeOG = "0x0000000000000000000000000000000000000001"
		const addressQEJDnUi = accounts[1]
		const addressbG1KZz = accounts[0]
		const addressxaH0MM = accounts[3]
		const addressym83rWY = accounts[1]
		const addresskFL50ls = accounts[3]
		const addressK1geQUq = accounts[1]
		const uintkCPnOWo = BigInt("1087")
		const uintRfOiseR = BigInt("1050")
		const addressOKm7Y7D = accounts[5]
		const DmmControllerV2T7rJUhI = await DmmControllerV2.new(addressGcBQbVJ, addressIedczZm, address22FeOG, addressQEJDnUi, addressbG1KZz, addressxaH0MM, addressym83rWY, addresskFL50ls, addressK1geQUq, uintkCPnOWo, uintRfOiseR, addressOKm7Y7D, {from: accounts[0]});
		const addressGHBE6zD = accounts[3]
		const uintIucMKND = BigInt("976")
		const addressUnZeZN3 = "0x0000000000000000000000000000000000000001"
		const uintrE0HYV = BigInt("1852")
		const uintDikQYWk = await DmmControllerV2T7rJUhI.getInterestRateByUnderlyingTokenAddress.call(addressGHBE6zD, {from: accounts[4]});
		const uintykmvBxv = await DmmControllerV2T7rJUhI.enableMarket.call(uintIucMKND, {from: accounts[0]});
		const uintpYimesX = await DmmControllerV2T7rJUhI.getExchangeRate.call(addressUnZeZN3, {from: accounts[1]});
		const uintcd339f = await DmmControllerV2T7rJUhI.enableMarket.call(uintrE0HYV, {from: accounts[1]});
		const uint22V7bM = await DmmControllerV2T7rJUhI.getActiveCollateralization.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressuOJN7x = "0x0000000000000000000000000000000000000001"
		const addresspi8k6VA = accounts[4]
		const addressjXUko6 = accounts[5]
		const addressdP2bdbp = "0x0000000000000000000000000000000000000001"
		const addressLdguuSV = accounts[1]
		const addresss3BLGK1 = accounts[4]
		const addressL4mNOr = accounts[4]
		const addressS6xWiGk = accounts[3]
		const addressXHEjXLv = "0x0000000000000000000000000000000000000001"
		const uintQwpY499 = BigInt("1607")
		const uintejE9c4A = BigInt("1356")
		const addressYlZY5F6 = accounts[1]
		const DmmControllerV2maXcoWF = await DmmControllerV2.new(addressuOJN7x, addresspi8k6VA, addressjXUko6, addressdP2bdbp, addressLdguuSV, addresss3BLGK1, addressL4mNOr, addressS6xWiGk, addressXHEjXLv, uintQwpY499, uintejE9c4A, addressYlZY5F6, {from: "0x0000000000000000000000000000000000000001"});
		const uintPNcFT3Y = BigInt("1262")
		const addressY3RpaiK = accounts[4]
		const uintLATNv5S = await DmmControllerV2maXcoWF.enableMarket.call(uintPNcFT3Y, {from: accounts[2]});
		await DmmControllerV2maXcoWF.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const addressC6jHmvo = await DmmControllerV2maXcoWF.getDmmTokenForUnderlying.call(addressY3RpaiK, {from: accounts[0]});
		const addresstCNwmqG = await DmmControllerV2maXcoWF.guardian.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressXtNwXv6 = accounts[5]
		const addressXKEuygx = accounts[1]
		const addressXJ7rfQl = accounts[0]
		const addressCGEqslO = accounts[1]
		const addressZxci6LD = accounts[2]
		const addressrFueJ5D = accounts[2]
		const addressUqaw35D = accounts[0]
		const addressIKTkTXV = accounts[0]
		const addressDMadcPW = accounts[0]
		const uintUlfLM1l = BigInt("2")
		const uintGVFHnbC = BigInt("1599")
		const addressjBf9bkc = accounts[4]
		const DmmControllerV2nVfvYFL = await DmmControllerV2.new(addressXtNwXv6, addressXKEuygx, addressXJ7rfQl, addressCGEqslO, addressZxci6LD, addressrFueJ5D, addressUqaw35D, addressIKTkTXV, addressDMadcPW, uintUlfLM1l, uintGVFHnbC, addressjBf9bkc, {from: accounts[1]});
		const addressXrnxRsH = "0x0000000000000000000000000000000000000001"
		await DmmControllerV2nVfvYFL.renounceOwnership.call({from: accounts[0]});
		const 
oa2e95j = await DmmControllerV2nVfvYFL.transferOwnershipToNewController.call(addressXrnxRsH, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressuL6oYlx = accounts[1]
		const addressS0fhDIQ = accounts[1]
		const addresshSdDZKh = accounts[4]
		const addresskIKhRsd = accounts[4]
		const addressrZ56vVi = accounts[5]
		const addressLnLoJUV = accounts[4]
		const addressaiWrY1a = accounts[1]
		const addressouPP695 = accounts[3]
		const addresssWslFr4 = accounts[0]
		const uintrKZT5xP = BigInt("1527")
		const uintITAgij = BigInt("237")
		const addressiRD89pP = accounts[4]
		const DmmControllerV2X5Jwt9O = await DmmControllerV2.new(addressuL6oYlx, addressS0fhDIQ, addresshSdDZKh, addresskIKhRsd, addressrZ56vVi, addressLnLoJUV, addressaiWrY1a, addressouPP695, addresssWslFr4, uintrKZT5xP, uintITAgij, addressiRD89pP, {from: accounts[2]});
		const addressjZ06vsm = await DmmControllerV2X5Jwt9O.owner.call({from: accounts[1]});
		const uintSygcQap = await DmmControllerV2X5Jwt9O.getTotalCollateralization.call({from: accounts[3]});
		await DmmControllerV2X5Jwt9O.whenNotPaused.call({from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressjW61Kdl = accounts[2]
		const addressxvyRRRB = accounts[2]
		const addressIRliQV = accounts[4]
		const addressqJ0oJCN = accounts[0]
		const addressktKPMbf = "0x0000000000000000000000000000000000000001"
		const addressGGkQYUD = accounts[4]
		const addressLLXUthh = "0x0000000000000000000000000000000000000001"
		const addressEydR75l = accounts[2]
		const addressCjM4Nd5 = accounts[3]
		const uintGc7uJZq = BigInt("1236")
		const uintjAq4iD7 = BigInt("1533")
		const addressZv4NHUl = accounts[2]
		const DmmControllerV2knuEvs = await DmmControllerV2.new(addressjW61Kdl, addressxvyRRRB, addressIRliQV, addressqJ0oJCN, addressktKPMbf, addressGGkQYUD, addressLLXUthh, addressEydR75l, addressCjM4Nd5, uintGc7uJZq, uintjAq4iD7, addressZv4NHUl, {from: accounts[2]});
		const addresslRJ1sDj = accounts[2]
		const addressdebiWwt = await DmmControllerV2knuEvs.setDmmEtherFactory.call(addresslRJ1sDj, {from: "0x0000000000000000000000000000000000000001"});
		await DmmControllerV2knuEvs.onlyBlacklister.call({from: accounts[2]});
		await DmmControllerV2knuEvs.onlyOwnerOrGuardian.call({from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressZp08Bru = accounts[1]
		const addressT4u8SQE = "0x0000000000000000000000000000000000000001"
		const addressClzhYgi = accounts[3]
		const addresssA29LL = accounts[3]
		const addressxcMIPU = accounts[2]
		const addressBVY2bE = accounts[0]
		const addressgjfYM4E = accounts[2]
		const addressFnwvXgF = accounts[2]
		const addressA7g9gS = accounts[4]
		const uintbm3WlS0 = BigInt("1913")
		const uintZWVVkhJ = BigInt("276")
		const address4AmVtw = "0x0000000000000000000000000000000000000001"
		const DmmControllerV2m1EthJS = await DmmControllerV2.new(addressZp08Bru, addressT4u8SQE, addressClzhYgi, addresssA29LL, addressxcMIPU, addressBVY2bE, addressgjfYM4E, addressFnwvXgF, addressA7g9gS, uintbm3WlS0, uintZWVVkhJ, address4AmVtw, {from: accounts[0]});
		const uintOrllGU = BigInt("1910")
		await DmmControllerV2m1EthJS.pause.call({from: accounts[4]});
		await DmmControllerV2m1EthJS.whenPaused.call({from: accounts[1]});
		await DmmControllerV2m1EthJS.renounceOwnership.call({from: accounts[0]});
		const uintsfnpZb = await DmmControllerV2m1EthJS.requireIsSecondaryMarketNft.call(uintOrllGU, {from: accounts[0]});
		await DmmControllerV2m1EthJS.unpause.call({from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addressSLLUzDP = accounts[5]
		const addressCHUV9Me = "0x0000000000000000000000000000000000000001"
		const addressUP8tK8E = accounts[2]
		const addressnkAeR5t = accounts[3]
		const address1Yobb0 = accounts[4]
		const addressxOseE1i = "0x0000000000000000000000000000000000000001"
		const addressfgIEBGN = accounts[2]
		const addressCkM22fR = accounts[1]
		const addressrfIIpjq = accounts[2]
		const uintd9Hw2F = BigInt("404")
		const uintjoD3aaq = BigInt("1284")
		const addressIOM8cM = accounts[4]
		const DmmControllerV2V3cMVPO = await DmmControllerV2.new(addressSLLUzDP, addressCHUV9Me, addressUP8tK8E, addressnkAeR5t, address1Yobb0, addressxOseE1i, addressfgIEBGN, addressCkM22fR, addressrfIIpjq, uintd9Hw2F, uintjoD3aaq, addressIOM8cM, {from: accounts[4]});
		const addressG5qcyW = accounts[1]
		const addressde6EKe6 = accounts[3]
		const uint3fHSLi = BigInt("774")
		const uintmyPCwS = BigInt("1074")
		const addressVpbVbb = accounts[4]
		const addressmmQI3QW = accounts[3]
		const uintVu2f06 = BigInt("207")
		const boolziQYC7 = await DmmControllerV2V3cMVPO.isBlacklisted.call(addressG5qcyW, {from: accounts[3]});
		const addressqnO5C6P = await DmmControllerV2V3cMVPO.checkNotBlacklisted.call(addressde6EKe6, {from: accounts[3]});
		const 
WN8O8Zd = await DmmControllerV2V3cMVPO.adminWithdrawFunds.call(uintmyPCwS, uint3fHSLi, {from: accounts[5]});
		const 
jalsiqy = await DmmControllerV2V3cMVPO.addMarketFromExistingDmmToken.call(addressmmQI3QW, addressVpbVbb, {from: accounts[5]});
		const uinttW2z4Pk = await DmmControllerV2V3cMVPO.requireIsNftOwner.call(uintVu2f06, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressiRtCiuO = accounts[3]
		const addressHPzpIc2 = accounts[0]
		const addressbvbfXfg = accounts[2]
		const addressiIafXVB = accounts[3]
		const addressJjTBzDB = accounts[5]
		const addressxBczKlR = accounts[0]
		const address4BYOmV = accounts[1]
		const addressLBy6zdd = accounts[0]
		const addresskVFGCcR = accounts[1]
		const uintTazYyq5 = BigInt("1042")
		const uinttOXRaIF = BigInt("393")
		const addressT9dtck9 = accounts[1]
		const DmmControllerV2GgIZLgU = await DmmControllerV2.new(addressiRtCiuO, addressHPzpIc2, addressbvbfXfg, addressiIafXVB, addressJjTBzDB, addressxBczKlR, address4BYOmV, addressLBy6zdd, addresskVFGCcR, uintTazYyq5, uinttOXRaIF, addressT9dtck9, {from: accounts[5]});
		const uintDdAeBC6 = BigInt("1723")
		const uintDhfNzqw = BigInt("1480")
		const addressWFNDmQx = await DmmControllerV2GgIZLgU.owner.call({from: accounts[1]});
		const addressjS79C3 = await DmmControllerV2GgIZLgU.getDmmTokenAddressByDmmTokenId.call(uintDdAeBC6, {from: accounts[3]});
		const uinti2COxkZ = await DmmControllerV2GgIZLgU.getInterestRateByDmmTokenId.call(uintDhfNzqw, {from: accounts[4]});
		const addresskZ4WKk8 = await DmmControllerV2GgIZLgU.guardian.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressqG7D0ii = accounts[3]
		const addressZQhcXnn = accounts[0]
		const addressAGoDJmL = accounts[2]
		const addressZP5a2y = accounts[3]
		const addressk92gZM5 = accounts[5]
		const addressimox4yB = accounts[0]
		const addressA4469Ws = accounts[1]
		const addressJdopeZD = accounts[0]
		const addressMX0iDza = accounts[1]
		const uintcaG6g4d = BigInt("1042")
		const uinttyS4meE = BigInt("393")
		const addressBKWtgsf = accounts[1]
		const DmmControllerV2GgIZLgU = await DmmControllerV2.new(addressqG7D0ii, addressZQhcXnn, addressAGoDJmL, addressZP5a2y, addressk92gZM5, addressimox4yB, addressA4469Ws, addressJdopeZD, addressMX0iDza, uintcaG6g4d, uinttyS4meE, addressBKWtgsf, {from: accounts[5]});
		const addresswKNibpi = accounts[4]
		const addressPrGNch = accounts[5]
		const uintCRc8U0h = BigInt("1096")
		const uintcp3Z5e = BigInt("1723")
		const uintMLNEBj8 = BigInt("1480")
		const 
mKwvYGe = await DmmControllerV2GgIZLgU.addMarketFromExistingDmmToken.call(addressPrGNch, addresswKNibpi, {from: accounts[5]});
		const uintkF6lqPZ = await DmmControllerV2GgIZLgU.setMinCollateralization.call(uintCRc8U0h, {from: accounts[2]});
		await DmmControllerV2GgIZLgU.renounceOwnership.call({from: accounts[4]});
		const addressWFNDmQx = await DmmControllerV2GgIZLgU.owner.call({from: accounts[1]});
		const addressjS79C3 = await DmmControllerV2GgIZLgU.getDmmTokenAddressByDmmTokenId.call(uintcp3Z5e, {from: accounts[3]});
		const uinti2COxkZ = await DmmControllerV2GgIZLgU.getInterestRateByDmmTokenId.call(uintMLNEBj8, {from: accounts[4]});
		const addresskZ4WKk8 = await DmmControllerV2GgIZLgU.guardian.call({from: accounts[0]});
	});
})