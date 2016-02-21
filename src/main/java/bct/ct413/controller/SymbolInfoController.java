package bct.ct413.controller;


import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import yahoofinance.YahooFinance;
import yahoofinance.histquotes.Interval;
import bct.ct413.model.TradeDetails;

import com.google.gson.Gson;

@Controller
public class SymbolInfoController {
	
	
	@RequestMapping(value = "/symbolInfoPage", method = RequestMethod.GET)
	public ModelAndView displayCharts(ModelAndView model) {
		TradeDetails trade = new TradeDetails();
		model.addObject("trade",trade);
		model.setViewName("symbolInfo");
		return model;
	}
	
	@RequestMapping(value = "getStockPrice/{value}", method = RequestMethod.GET)
	public @ResponseBody String getStockPerice(@PathVariable String value){
		
		yahoofinance.Stock newStock = new yahoofinance.Stock(value);
		BigDecimal price = newStock.getQuote().getPrice();
		System.out.println("Stock exchange: "+newStock.getStockExchange());
		Gson gson = new Gson();
		String json = gson.toJson(price);
		return json;
		
	}
	 
    @RequestMapping(value = "getStockInfo/{value}", method = RequestMethod.GET)
	public @ResponseBody String test(@PathVariable String value){
		
		
		Calendar from = Calendar.getInstance();
		Calendar to = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy MMM dd HH:mm:ss");		
		from.add(Calendar.YEAR, -1); 
		System.out.println("FROM: "+sdf.format(from.getTime()));
		System.out.println("TO: "+sdf.format(to.getTime()));
		
		yahoofinance.Stock stock = YahooFinance.get(value, from, to,Interval.DAILY);
		Gson gson = new Gson();
		
		String json2 = gson.toJson(stock);
		return json2;


		
		
	}
    
/*    @RequestMapping(value = "/symbolLookUp", method = RequestMethod.POST)
    public ModelAndView symbolLookUp(@RequestParam("symbol") String symbol, ModelAndView model){
    	System.out.println("String symbol: "+symbol);
    	
		Calendar from = Calendar.getInstance();
		Calendar to = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy MMM dd HH:mm:ss");		
		from.add(Calendar.YEAR, -1); 
		System.out.println("FROM: "+sdf.format(from.getTime()));
		System.out.println("TO: "+sdf.format(to.getTime()));
		
		yahoofinance.Stock stock = YahooFinance.get(symbol, from, to,Interval.DAILY);
		System.out.println("Price of " + symbol + " right now: "+stock.getQuote());
		System.out.println("1 - "+stock.getStats());
		System.out.println("2 - "+stock.getStockExchange());
		
	
		List<HistoricalQuote> googleHistQuotes = stock.getHistory();
		System.out.println("Size of list: "+googleHistQuotes.size());
		System.out.println(stock.getStats().getEps());
		
		System.out.println(stock.getStats().getPe());
		//stock.getQuote().get

		
		Gson gson = new Gson();
		String json = gson.toJson(googleHistQuotes);
		System.out.println("JSON "+json);
		
		String json2 = gson.toJson(stock);
		System.out.println(json2);
		
		model.setViewName("symbolInfo");
		model.addObject("googleHistQuotes", json);
		model.addObject("currentQuote", stock);

		return model;
    }*/
    
/*    @RequestMapping(value = "/ajaxSymbolLookUp", method = RequestMethod.POST)
    public ModelAndView ajaxSymbolLookUp(@RequestParam("symbol") String symbol, ModelAndView model){
    	System.out.println("String symbol: "+symbol);
		
		yahoofinance.Stock stock = YahooFinance.get(symbol);
		
		System.out.println("Price of " + symbol + " right now: "+stock.getQuote());
		System.out.println("1 - "+stock.getStats());
		System.out.println("2 - "+stock.getStockExchange());	
		System.out.println(stock.getStats().getEps());
		System.out.println(stock.getStats().getPe());

		
		Gson gson = new Gson();
		
		String json2 = gson.toJson(stock);
		System.out.println(json2);
		
		model.setViewName("symbolInfo");
		model.addObject("currentQuote", stock);

		return model;
    }*/
}
