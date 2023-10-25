const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringSGZAF73 = "YOVT7Ol7LupYt77R3iPMA5reGrjqEcaliJznXHo7yz1q"
		const stringqM1dFk5 = "an4Vg7phCgbR9WAqE7OR1sRT8bq5g7dn1VVpLljSNZQ3pORevv2V2Hla"
		const uintPW93JgF = BigInt("34")
		const WheatFarmE1R2Og3 = await WheatFarm.new(stringSGZAF73, stringqM1dFk5, uintPW93JgF, {from: "0x0000000000000000000000000000000000000001"});
		const uintREHWfEY = BigInt("1228")
		const addresswf88BGk = accounts[4]
		const uintF8zJAwC = BigInt("1259")
		const addressY5ZwQp0 = accounts[5]
		const uintZK1aXcW = BigInt("1781")
		const addressRbhokL2 = accounts[0]
		const addressFFt42e5 = accounts[0]
		const addressdRitTWB = accounts[0]
		const boolg3NJOKn = await WheatFarmE1R2Og3.transfer.call(addresswf88BGk, uintREHWfEY, {from: accounts[3]});
		const boolOn0UHRz = await WheatFarmE1R2Og3.approve.call(addressY5ZwQp0, uintF8zJAwC, {from: accounts[3]});
		const booleePKIFe = await WheatFarmE1R2Og3.approveAndCall.call(addressRbhokL2, uintZK1aXcW, {from: accounts[1]});
		const stringFMEmPLc = await WheatFarmE1R2Og3.symbol.call({from: accounts[5]});
		const uintmnCCDfI = await WheatFarmE1R2Og3.allowance.call(addressdRitTWB, addressFFt42e5, {from: accounts[3]});
	});

	it('test for WheatFarm', async () => {
		const stringbNYd8ry = "H9wV6GXb8NkS2IK8tS6rgSKuqUJ2uvbph3YCxR7ELWb7brz3YQwCwU9gLBtOLiGQpjwTl4WMa"
		const stringwlcu3kN = "Lq1wjGaOdXywuhfL8b4kTTdw79HHFx3M46bJEnK72wGvjwoNe3H6htsI5u"
		const uintwkBlqS2 = BigInt("1896")
		const WheatFarmMISAPhx = await WheatFarm.new(stringbNYd8ry, stringwlcu3kN, uintwkBlqS2, {from: accounts[2]});
		const uintlx1z6y = BigInt("1199")
		const addresskVItit7 = accounts[2]
		const uintlmT3LY = BigInt("166")
		const addressw63uUpJ = accounts[2]
		const boolA9QyrgM = await WheatFarmMISAPhx.transfer.call(addresskVItit7, uintlx1z6y, {from: accounts[4]});
		const stringYE3bL8I = await WheatFarmMISAPhx.symbol.call({from: accounts[0]});
		const uintgNwLIS3 = await WheatFarmMISAPhx.totalSupply.call({from: accounts[2]});
		const boolvsowrjV = await WheatFarmMISAPhx.approveAndCall.call(addressw63uUpJ, uintlmT3LY, {from: accounts[0]});
		const stringMU6gr9i = await WheatFarmMISAPhx.name.call({from: accounts[0]});

		await expect(WheatFarmMISAPhx.transfer.call(addresskVItit7, uintlx1z6y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringZaqlnbe = "PAYSB6OwoEo3NfQrpAAD87AKouHz7q1SfhCpEPR3a9Wbn43B0tzKI27MjKkztxrHqWKPFaILOzdneLglwrw9epSO"
		const stringfJGkxo = "DjwMvKDAsqPu5j9RDKUn8nxVwlykPlis58"
		const uintDdlYz2V = BigInt("196")
		const WheatFarmodfusZw = await WheatFarm.new(stringZaqlnbe, stringfJGkxo, uintDdlYz2V, {from: accounts[4]});
		const uintwIJDF1H = BigInt("1485")
		const addressMyi3MQ = accounts[4]
		const uintZ2dTjM = BigInt("933")
		const addresshkhO5O5 = accounts[0]
		const uintVOVhapP = BigInt("1393")
		const addressGpeF3US = accounts[3]
		const uintuF8gzcG = BigInt("35")
		const addressriO0SsT = "0x0000000000000000000000000000000000000001"
		const boolZw8gqS5 = await WheatFarmodfusZw.approve.call(addressMyi3MQ, uintwIJDF1H, {from: "0x0000000000000000000000000000000000000001"});
		const boolk4PAtKZ = await WheatFarmodfusZw.transfer.call(addresshkhO5O5, uintZ2dTjM, {from: accounts[1]});
		const uint8RVTEFqP = await WheatFarmodfusZw.decimals.call({from: accounts[4]});
		const boolBjUroBt = await WheatFarmodfusZw.increaseAllowance.call(addressGpeF3US, uintVOVhapP, {from: accounts[2]});
		const boolhHJipsH = await WheatFarmodfusZw.decreaseAllowance.call(addressriO0SsT, uintuF8gzcG, {from: accounts[4]});

		assert.equal(boolZw8gqS5, true)
		await expect(WheatFarmodfusZw.transfer.call(addresshkhO5O5, uintZ2dTjM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringJnI5LBo = "9BfXoD2PNoW2BRW66AAmtlFfIMyQQ0UjTywK5qKn0x1pk1ParVD"
		const stringzV1AdeV = "pvcYKy7BPZ7kUEx1lgadR8foBRSKWY5V4C"
		const uintY3y6CLH = BigInt("602")
		const WheatFarmZ9SWd3 = await WheatFarm.new(stringJnI5LBo, stringzV1AdeV, uintY3y6CLH, {from: accounts[5]});
		const addressJfW9Ric = accounts[0]
		const addressNhLWPd = accounts[4]
		const uintCsrxsOd = BigInt("121")
		const addressbmqYYrZ = accounts[4]
		const addressCHyAGZn = accounts[2]
		const boolVTW980y = await WheatFarmZ9SWd3.transferownership.call(addressJfW9Ric, {from: accounts[4]});
		const uintyyralej = await WheatFarmZ9SWd3.balanceOf.call(addressNhLWPd, {from: accounts[2]});
		const boolhbQZclX = await WheatFarmZ9SWd3.transferFrom.call(addressCHyAGZn, addressbmqYYrZ, uintCsrxsOd, {from: accounts[4]});
		const stringoTxykzt = await WheatFarmZ9SWd3.symbol.call({from: accounts[3]});

		await expect(WheatFarmZ9SWd3.transferownership.call(addressJfW9Ric, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringaOv5rVz = "9pEwi2EycMFKf5QokSy2rm6UnlNcFAvIDKRtPQXCyDwtK8tXQsGAjP5mKAjn3ZcvNYYzkQcHULOHoa4VAJ5AKRtqRX13"
		const stringzZvQvU = "tHeXDjOJlhw2CSrAcRvNJSTswc3sb2oSDCNnHVTZg1Ly9d42tOf8pna5hl3"
		const uintr1cUlxp = BigInt("2010")
		const WheatFarmpuo4fwO = await WheatFarm.new(stringaOv5rVz, stringzZvQvU, uintr1cUlxp, {from: accounts[5]});
		const uintHJCGkR7 = BigInt("115")
		const addressv1mqauH = accounts[2]
		const addressCa3hwFt = accounts[3]
		const addresslL3vkT1 = "0x0000000000000000000000000000000000000001"
		const uintMFcRYDU = BigInt("1649")
		const addressQ1pNUiR = accounts[2]
		const boolThV1khT = await WheatFarmpuo4fwO.approveAndCall.call(addressv1mqauH, uintHJCGkR7, {from: accounts[2]});
		const uintigUbKuQ = await WheatFarmpuo4fwO.allowance.call(addresslL3vkT1, addressCa3hwFt, {from: accounts[0]});
		const uint8myziEv = await WheatFarmpuo4fwO.decimals.call({from: accounts[3]});
		const boolrXLvqlv = await WheatFarmpuo4fwO.approveAndCall.call(addressQ1pNUiR, uintMFcRYDU, {from: accounts[5]});

		await expect(WheatFarmpuo4fwO.approveAndCall.call(addressv1mqauH, uintHJCGkR7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringQ2BpQXB = "roBgONzaxBhRitlqOGjFg9pnc717N8EQBQXSPvW2KLuL8L3O9WLDT2i5bG8"
		const stringMNTRAPU = "TU35CjdJAsR8YUxH8zTr6TRPGQwAYmWURATYHIUbK"
		const uinti3BSFaJ = BigInt("129")
		const WheatFarmQT81RA1 = await WheatFarm.new(stringQ2BpQXB, stringMNTRAPU, uinti3BSFaJ, {from: accounts[0]});
		const uintjFtTwcs = BigInt("194")
		const addressHrIslO = accounts[0]
		const uinthPa08D = BigInt("108")
		const addresslgjrSfn = accounts[3]
		const boolS6zxuLO = await WheatFarmQT81RA1.approve.call(addressHrIslO, uintjFtTwcs, {from: accounts[3]});
		const boollpjtS3c = await WheatFarmQT81RA1.increaseAllowance.call(addresslgjrSfn, uinthPa08D, {from: accounts[0]});
		const uintmifYeUD = await WheatFarmQT81RA1.totalSupply.call({from: accounts[3]});

		assert.equal(boolS6zxuLO, true)
		await expect(WheatFarmQT81RA1.increaseAllowance.call(addresslgjrSfn, uinthPa08D, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringaOv5rVz = "9pEwi2EycMFKf5QokSy2rm6UnlNcFAvIDKRtPQXCyDwtK8tXQsGAjP5mKAjn3ZcvNYYzkQcHULOHoa4VAJ5AKRtqRX13"
		const stringzZvQvU = "tHeXDjOJlhw2CSrAcRvNJSTswc3sb2oSDCNnHVTZg1Ly9d42tOf8pna5hl3"
		const uintCvbm1LH = BigInt("2010")
		const WheatFarmpuo4fwO = await WheatFarm.new(stringaOv5rVz, stringzZvQvU, uintCvbm1LH, {from: accounts[5]});
		const addressli874Ee = accounts[4]
		const address7Ofhh9 = accounts[3]
		const addressdQ2Xsn = "0x0000000000000000000000000000000000000001"
		const uintz2vaiPh = BigInt("1649")
		const addressaozd9b2 = accounts[2]
		const uintBpddKUx = await WheatFarmpuo4fwO.balanceOf.call(addressli874Ee, {from: accounts[4]});
		const uintigUbKuQ = await WheatFarmpuo4fwO.allowance.call(addressdQ2Xsn, address7Ofhh9, {from: accounts[0]});
		const uint8myziEv = await WheatFarmpuo4fwO.decimals.call({from: accounts[3]});
		const boolrXLvqlv = await WheatFarmpuo4fwO.approveAndCall.call(addressaozd9b2, uintz2vaiPh, {from: accounts[5]});

		assert.equal(boolrXLvqlv, true)
		assert.equal(uint8myziEv, BigInt("18"))
		assert.equal(uintBpddKUx, BigInt("0"))
		assert.equal(uintigUbKuQ, BigInt("0"))
	});

	it('test for WheatFarm', async () => {
		const stringQ2BpQXB = "roBgONzaxBhRitlqOGjFg9pnc717N8EQBQXSPvW2KLuL8L3O9WLDT2i5bG8"
		const stringMNTRAPU = "TU35CjdJAsR8YUxH8zTr6TRPGQwAYmWURATYHIUbK"
		const uintuYKhWVR = BigInt("129")
		const WheatFarmQT81RA1 = await WheatFarm.new(stringQ2BpQXB, stringMNTRAPU, uintuYKhWVR, {from: accounts[0]});
		const addressoY6OSV = accounts[0]
		const uintVTt1rBJ = BigInt("194")
		const addressjVjpYVK = accounts[0]
		const uinteoI3ewy = BigInt("0")
		const addressDXY3f9B = accounts[5]
		const addressGsNNEJ2 = accounts[6]
		const uintW1cGk5O = await WheatFarmQT81RA1.balanceOf.call(addressoY6OSV, {from: accounts[3]});
		const boolS6zxuLO = await WheatFarmQT81RA1.approve.call(addressjVjpYVK, uintVTt1rBJ, {from: accounts[3]});
		const bool4lgj7B = await WheatFarmQT81RA1.transferFrom.call(addressGsNNEJ2, addressDXY3f9B, uinteoI3ewy, {from: accounts[4]});
		const uintmifYeUD = await WheatFarmQT81RA1.totalSupply.call({from: accounts[3]});

		assert.equal(bool4lgj7B, true)
		assert.equal(boolS6zxuLO, true)
		assert.equal(uintW1cGk5O, BigInt("129000000000000000000"))
		assert.equal(uintmifYeUD, BigInt("129000000000000000000"))
	});
})